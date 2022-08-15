import { yupResolver } from '@hookform/resolvers/yup';
import AddIcon from '@mui/icons-material/Add';
import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppContext } from '../../contexts/AppContext';
import { InputNewVehicle } from '../../types/inputNewVehicle';
import { inputNewVehicleSchema } from '../../validations/inputNewVehicle';

const DialogNewVehicle: FC = () => {
  const { initialValues, parkedVehicles, setParkedVehicles } = useAppContext();
  const [newVehicle, setNewVehicle] = useState(false);
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<InputNewVehicle>({
    resolver: yupResolver(inputNewVehicleSchema),
  });

  const onResetFields = () => {
    resetField('licensePlate');
    resetField('tipeVehicle');
  };

  const onSubmit: SubmitHandler<InputNewVehicle> = (data) => {
    const startTime = new Date();
    if (parkedVehicles === null) {
      setParkedVehicles([
        { vehicleData: data, startTime, historic: initialValues },
      ]);
      setNewVehicle(false);
      onResetFields();
      return;
    }
    const newParkedVehicles = [...parkedVehicles];
    newParkedVehicles.push({
      vehicleData: data,
      startTime,
      historic: initialValues,
    });
    setParkedVehicles(newParkedVehicles);
    setNewVehicle(false);
    onResetFields();
  };

  return (
    <>
      <Stack alignItems="center" justifyContent="center" p={2}>
        <Box>
          <IconButton onClick={() => setNewVehicle(true)}>
            <AddIcon color="secondary" />
          </IconButton>
        </Box>
        <Dialog open={newVehicle} onClose={() => setNewVehicle(false)}>
          <DialogTitle
            sx={{
              backgroundColor: 'primary.main',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography>Novo Veículo</Typography>
          </DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack p={2} spacing={2}>
                <TextField
                  size="small"
                  variant="standard"
                  label="Placa do veículo"
                  {...register('licensePlate')}
                  error={!!errors.licensePlate?.message}
                />
                <Autocomplete
                  options={['Carro', 'Moto']}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      {...register('tipeVehicle')}
                      label="Tipo do veículo"
                      variant="standard"
                      size="small"
                    />
                  )}
                />
                <Stack
                  flexDirection="row"
                  mt={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button
                    size="small"
                    variant="outlined"
                    color="secondary"
                    sx={{ marginRight: 2 }}
                    onClick={onResetFields}
                  >
                    Limpar
                  </Button>
                  <Button size="small" variant="contained" type="submit">
                    Adicionar
                  </Button>
                </Stack>
              </Stack>
            </form>
          </DialogContent>
        </Dialog>
      </Stack>
    </>
  );
};

export default DialogNewVehicle;

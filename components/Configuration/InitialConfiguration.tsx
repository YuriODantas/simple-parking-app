import { MonetizationOn } from '@mui/icons-material';
import {
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { initialValuesSchema } from '../../validations/initialValues';
import { InitialValues } from '../../types/InitialValues';
import { useAppContext } from '../../contexts/AppContext';

const Adornment = {
  startAdornment: (
    <InputAdornment position="start">
      <MonetizationOn />
    </InputAdornment>
  ),
};

const InitialConfiguration: FC = () => {
  const { setInitialValues } = useAppContext();
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<InitialValues>({
    resolver: yupResolver(initialValuesSchema),
  });

  const onSubmit: SubmitHandler<InitialValues> = (data) =>
    setInitialValues(data);

  const onResetFields = () => {
    resetField('carFirstHour');
    resetField('carMoreHours');
  };

  return (
    <Stack alignItems="center" p={1}>
      <Typography fontSize={20} fontWeight="bold" color="secondary">
        Configurações Iniciais
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack alignItems="center" spacing={1} maxWidth="300px" mt={1}>
          <TextField
            type="number"
            size="small"
            variant="standard"
            label="1ª hora"
            InputProps={Adornment}
            {...register('carFirstHour', { min: 0 })}
            error={!!errors.carFirstHour?.message}
          />
          {errors.carFirstHour?.message && (
            <Typography variant="caption">
              {errors.carFirstHour?.message}
            </Typography>
          )}
          <TextField
            type="number"
            size="small"
            variant="standard"
            label="Demais horas"
            InputProps={Adornment}
            {...register('carMoreHours', { min: 0 })}
            error={!!errors.carMoreHours?.message}
          />
          {errors.carMoreHours?.message && (
            <Typography variant="caption">
              {errors.carMoreHours?.message}
            </Typography>
          )}
        </Stack>
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
            Iniciar
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default InitialConfiguration;

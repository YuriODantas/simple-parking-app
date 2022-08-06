import { MonetizationOn } from '@mui/icons-material';
import {
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { FC } from 'react';

const Adornment = {
  startAdornment: (
    <InputAdornment position="start">
      <MonetizationOn />
    </InputAdornment>
  ),
};

const InitialConfiguration: FC = () => {
  return (
    <Stack alignItems="center" p={1}>
      <Typography fontSize={20} fontWeight="bold">
        Configurações Iniciais
      </Typography>
      <Stack alignItems="center" spacing={2} maxWidth="300px" mt={1}>
        <TextField
          size="small"
          variant="standard"
          label="1ª hora"
          InputProps={Adornment}
        />
        <TextField
          size="small"
          variant="standard"
          label="Demais horas"
          InputProps={Adornment}
        />
      </Stack>
      <Stack
        flexDirection="row"
        mt={2}
        justifyContent="center"
        alignItems="center"
      >
        <Button size="small" variant="outlined" sx={{ marginRight: 2 }}>
          Limpar
        </Button>
        <Button size="small" variant="contained">
          Iniciar
        </Button>
      </Stack>
    </Stack>
  );
};

export default InitialConfiguration;

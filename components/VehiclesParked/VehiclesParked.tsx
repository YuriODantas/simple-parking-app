import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import { useAppContext } from '../../contexts/AppContext';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';

const VehiclesParked = () => {
  const { parkedVehicles } = useAppContext();

  return (
    <Container>
      <Stack flexDirection="row" flexWrap="wrap">
        {parkedVehicles?.map((vehicle, index) => (
          <Card
            key={index}
            sx={{
              minWidth: '200px',
              minHeight: '150px',
              marginRight: 2,
            }}
          >
            <CardHeader
              title={vehicle.vehicleData.licensePlate.toUpperCase()}
              avatar={
                <Avatar sx={{ backgroundColor: 'secondary.main' }}>
                  {vehicle.vehicleData.tipeVehicle === 'Carro' ? (
                    <AirportShuttleIcon />
                  ) : (
                    <TwoWheelerIcon />
                  )}
                </Avatar>
              }
              sx={{
                backgroundColor: 'primary.main',
              }}
            />
            <CardContent>
              <Stack spacing={1}>
                <Typography>02:45:59</Typography>
                <Typography>R$ -</Typography>
                <Button variant="contained" color="error">
                  Finalizar
                </Button>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
};

export default VehiclesParked;

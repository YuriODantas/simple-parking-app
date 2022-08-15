import { DepartureBoard } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import InitialConfiguration from '../components/Configuration/InitialConfiguration';
import DialogNewVehicle from '../components/DialogNewVehicle';
import { useAppContext } from '../contexts/AppContext';

const Home: NextPage = () => {
  const { initialValues } = useAppContext();

  return (
    <>
      <Head>
        <title>Simple Parking app</title>
      </Head>
      <Stack
        width="100%"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        p={2}
        bgcolor="primary.main"
      >
        <Typography variant="h4" mr={1} color="secondary">
          Simple Parking
        </Typography>
        <DepartureBoard fontSize="large" color="secondary" />
      </Stack>
      {!initialValues?.firstHour && <InitialConfiguration />}
      {initialValues?.firstHour && <DialogNewVehicle />}
    </>
  );
};

export default Home;

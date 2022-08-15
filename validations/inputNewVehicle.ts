import * as yup from 'yup';

export const inputNewVehicleSchema = yup.object({
  licensePlate: yup.string().required('Campo obrigatório'),
  tipeVehicle: yup.string().required('Campo obrigatório'),
});

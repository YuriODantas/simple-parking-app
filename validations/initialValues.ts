import * as yup from 'yup';

export const initialValuesSchema = yup.object({
  carFirstHour: yup
    .number()
    .min(0, 'Valores negativos não são aceitos.')
    .required('Campo obrigatório'),
  carMoreHours: yup
    .number()
    .min(0, 'Valores negativos não são aceitos.')
    .required('Campo obrigatório'),
});

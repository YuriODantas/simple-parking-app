import * as yup from 'yup';

export const initialValuesSchema = yup.object({
  firstHour: yup
    .number()
    .min(0, 'Valores negativos não são aceitos.')
    .required('Campo obrigatório'),
  moreHours: yup
    .number()
    .min(0, 'Valores negativos não são aceitos.')
    .required('Campo obrigatório'),
});

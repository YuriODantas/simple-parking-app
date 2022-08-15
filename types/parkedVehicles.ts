import { InitialValues } from './InitialValues';
import { InputNewVehicle } from './inputNewVehicle';

export type ParkedVehicles = {
  vehicleData: InputNewVehicle;
  startTime: Date;
  finalTime?: Date;
  payment?: {
    type?: string;
    value?: number;
  };
  historic: InitialValues | null;
};

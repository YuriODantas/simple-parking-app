import { createContext, ReactNode, useContext, useState } from 'react';
import { InitialValues } from '../types/InitialValues';
import { ParkedVehicles } from '../types/parkedVehicles';

type appContextType = {
  initialValues: InitialValues | null;
  setInitialValues: (newInitialValues: InitialValues) => void;
  parkedVehicles: ParkedVehicles[] | null;
  setParkedVehicles: (parkedVehicles: ParkedVehicles[] | null) => void;
};

const defaultValues: appContextType = {
  initialValues: null,
  setInitialValues: () => null,
  parkedVehicles: null,
  setParkedVehicles: () => null,
};

const appContext = createContext<appContextType>(defaultValues);

export const useAppContext = () => useContext(appContext);

type Props = {
  children: ReactNode;
};
export const AppContextProvider = ({ children }: Props) => {
  const [initialValues, setInitialValues] = useState<InitialValues | null>(
    null,
  );
  const [parkedVehicles, setParkedVehicles] = useState<ParkedVehicles[] | null>(
    null,
  );

  return (
    <appContext.Provider
      value={{
        initialValues,
        setInitialValues,
        parkedVehicles,
        setParkedVehicles,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

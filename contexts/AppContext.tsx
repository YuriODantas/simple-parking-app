import { createContext, ReactNode, useContext, useState } from 'react';
import { InitialValues } from '../types/InitialValues';

type appContextType = {
  initialValues: InitialValues | null;
  setInitialValues: (newInitialValues: InitialValues) => void;
};

const defaultValues: appContextType = {
  initialValues: null,
  setInitialValues: () => null,
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
  return (
    <appContext.Provider value={{ initialValues, setInitialValues }}>
      {children}
    </appContext.Provider>
  );
};

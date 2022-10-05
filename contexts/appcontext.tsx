import React, { createContext, useState } from 'react';

type GlobalAction = 'new-expense' | null;

interface AppContextType {
  globalAction?: GlobalAction;
  setGlobalAction?: React.Dispatch<React.SetStateAction<GlobalAction>>;
}

export const AppContext = createContext<AppContextType>({});

interface Props {
  children: React.ReactNode;
}

const AppContextProvider = ({ children }: Props) => {
  const [globalAction, setGlobalAction] = useState<GlobalAction>(null);

  return (
    <AppContext.Provider
      value={{
        globalAction,
        setGlobalAction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

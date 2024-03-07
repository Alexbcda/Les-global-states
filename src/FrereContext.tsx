import { createContext, ReactNode, useContext, useState } from 'react';

interface FrereContextProps {
  prenom: string;
  changePrenom: (nouveauPrenom: string) => void;
}

const FrereContext = createContext<FrereContextProps | undefined>(undefined);

export const FrereProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [prenom, setPrenom] = useState("Geoffroy");

  const changePrenom = (nouveauPrenom: string) => {
    setPrenom(nouveauPrenom);
  };

  return (
    <FrereContext.Provider value={{ prenom, changePrenom }}>
      {children}
    </FrereContext.Provider>
  );
};

export const useFrereContext = () => {
  const context = useContext(FrereContext);
  if (!context) {
    throw new Error('useFrereContext must be used within a FrereProvider');
  }
  return context;
};

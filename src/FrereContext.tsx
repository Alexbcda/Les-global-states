import { createContext, ReactNode, useContext, useState } from 'react';

interface FrereContextProps {
  prenom: string;
  changePrenom: (nouveauPrenom: string) => void;
}

export const FrereContext = createContext<FrereContextProps>({
  prenom: "",
  changePrenom: () => {}
});


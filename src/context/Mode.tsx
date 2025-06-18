// src/context/ModeContext.tsx
import { createContext, useState, useContext, useMemo } from 'react';
import type { ReactNode } from 'react';

type Mode = 'gui' | 'cli';

type ModeContextType = {
  mode: Mode;
  toggleMode: () => void;
};

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export const ModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<Mode>('gui');

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'gui' ? 'cli' : 'gui'));
  };

  const value = useMemo(() => ({ mode, toggleMode }), [mode]);

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
};

export const useMode = () => {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
};
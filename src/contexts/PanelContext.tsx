import React, { useState, createContext, useContext } from "react";
import { Panel } from "../types";

type PanelContextType = {
  panels: Panel[];
  addPanel(panel: Panel): void;
};

export const PanelContext = createContext<PanelContextType>({} as any);

export const usePanels = () => {
  const { panels, addPanel } = useContext(PanelContext);
  return { panels, addPanel };
};

interface ProviderProps {
  children: React.ReactNode;
}

export const PanelProvider = ({ children }: ProviderProps) => {
  const [panels, setPanels] = useState<Panel[]>([]);
  const addPanel = (panel: Panel) => {
    setPanels((panels) => [...panels, panel]);
  };

  return (
    <PanelContext.Provider value={{ panels, addPanel }}>
      {children}
    </PanelContext.Provider>
  );
};

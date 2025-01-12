"use client";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface PriceContextValue {
  price: number;
  setPrice: Dispatch<SetStateAction<number>>;
}

const PriceContext = createContext<PriceContextValue | null>(null);

interface PriceProviderProps {
  children: ReactNode;
}

export const PriceProvider = ({ children }) => {
  const [price, setPrice] = useState(1000);
  return (
    <PriceContext.Provider value={{ price, setPrice }}>
      {children}
    </PriceContext.Provider>
  );
};

export const UsePrice = () => {
  const context = useContext(PriceContext);
  if (!context) {
    throw new Error("usePrice must be within a PriceProvider");
  }
  return context;
};

export default PriceProvider;

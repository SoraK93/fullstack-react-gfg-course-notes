import { createContext, useContext, useState } from "react";

const initialValue = {
  count: 0,
};

const CountContext = createContext(initialValue);

// Provider
const CountProvider = ({ children }) => {
  const [count, setCount] = useState(111);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

// Consumer
const useCount = () => useContext(CountContext);

export { useCount, CountProvider };

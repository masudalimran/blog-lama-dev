import { createContext, useEffect, useState } from "react";

const DataContext = createContext({});
export const DataProvider = ({ children }) => {
  const [logStatus, setLogStatus] = useState(false);
  useEffect(() => {
    const x = localStorage.getItem("loginInfo");
    if (x === "true") {
      setLogStatus(true);
    } else {
      setLogStatus(false);
    }
  }, [logStatus]);

  return (
    <DataContext.Provider value={{ logStatus, setLogStatus }}>
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;

import { createContext, useEffect, useState } from "react";

const DataContext = createContext({});
export const DataProvider = ({ children }) => {
  const [logStatus, setLogStatus] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("loginInfo")) {
      setLogStatus(true);
    } else {
      setLogStatus(false);
    }
  }, [logStatus]);

  return (
    <DataContext.Provider
      value={{
        logStatus,
        setLogStatus,
        openLogin,
        setOpenLogin,
        openRegister,
        setOpenRegister,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;

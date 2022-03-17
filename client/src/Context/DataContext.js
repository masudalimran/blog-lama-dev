import { createContext, useEffect, useState } from "react";

const DataContext = createContext({});
export const DataProvider = ({ children }) => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [snackBarLogin, setSnackBarLogin] = useState(false);

  return (
    <DataContext.Provider
      value={{
        openLogin,
        setOpenLogin,
        openRegister,
        setOpenRegister,
        snackBarLogin,
        setSnackBarLogin,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;

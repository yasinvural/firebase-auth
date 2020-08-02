import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const useStateValue = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   return (
//     <AuthContext.Provider value={{ currentUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

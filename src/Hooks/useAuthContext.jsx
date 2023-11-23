import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProviders";

const useAuthContext = () => {
  const user = useContext(AuthContext);
  return user;
};

export default useAuthContext;

import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (response) => {
    setUser(response.data); // Update the user context
    authStorage.storeUser(response.data); // Store the user data in local storage
  };

  const logOut = () => {
    setUser(null); // Clear the user context
    authStorage.removeUser(); // Remove user data from storage
  };

  return { user, logIn, logOut };
};

export default useAuth;
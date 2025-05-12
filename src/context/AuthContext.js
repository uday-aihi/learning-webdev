import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const toggleLogin = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      setUserData(null);
    } else {
      setIsLoggedIn(true);
    }
  };

  const fetchUserData = async () => {
    try {
      const res = await fetch("https://randomuser.me/api/");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setUserData(data.results[0]);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, toggleLogin, userData, fetchUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

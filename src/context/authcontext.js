import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const role = localStorage.getItem("role");

    if (token && role) {
      setUser({ role });
    }
}, []);

  const login = (data) => {
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("role", data.role);

    setUser({ role: data.role });
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("role");

    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setRole(user.role.slug);
    }
  }, []);

  const setAndStoreRole = (newRole) => {
    setRole(newRole);
  };

  const roles = {
    superAdmin: role === "super-admin",
    admin: role === "admin",
    student: role === "student",
    support: role === "support",
  };

  const isAuthenticated = () => {
    return !!localStorage.getItem("accessToken");
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    setRole(null);
    router.push("/");
  };

  return (
    <RoleContext.Provider
      value={{
        role,
        setRole: setAndStoreRole,
        roles,
        isAuthenticated,
        logout,
      }}
    >
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => useContext(RoleContext);

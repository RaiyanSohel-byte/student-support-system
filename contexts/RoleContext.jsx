"use client";

import { createContext, useContext, useState } from "react";

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState(null);

  const roles = {
    superAdmin: role === "superAdmin",
    admin: role === "admin",
    student: role === "student",
    support: role === "support",
  };

  return (
    <RoleContext.Provider value={{ role, setRole, roles }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => useContext(RoleContext);

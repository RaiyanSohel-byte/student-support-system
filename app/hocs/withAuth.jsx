"use client";
import { useRole } from "@/contexts/RoleContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const withAuth = (WrappedComponent, allowedRoles) => {
  const AuthComponent = (props) => {
    const { role, isAuthenticated } = useRole();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated()) {
        router.push("/");
      } else if (allowedRoles && !allowedRoles.includes(role)) {
        router.push("/unauthorized"); // Or a 403 page
      }
    }, [role, router, isAuthenticated]);

    if (!isAuthenticated() || (allowedRoles && !allowedRoles.includes(role))) {
      return null; // Or a loading spinner
    }

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;

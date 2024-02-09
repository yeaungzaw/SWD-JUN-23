import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PreventComponents = ({ check, route, children }) => {
  const nav = useNavigate();

  useEffect(() => {
    if (check) {
      nav(route);
    }
  }, []);

  return <>{children}</>;
};

export default PreventComponents;

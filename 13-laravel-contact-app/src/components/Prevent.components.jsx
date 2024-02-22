import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PreventComponents = ({ route, check, children }) => {
  const nav = useNavigate();

  useEffect(() => {
    if (check) {
      nav(route);
    }
  }, []);

  return <>{children}</>;
};

export default PreventComponents;

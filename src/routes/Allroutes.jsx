import React from "react";
import { Route, Routes } from "react-router-dom";
import AccountPage from "../components/AccountPage";
import Dashboard from "../pages/Dashboard";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AccountPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Allroutes;

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Content } from "../Pages/Plantilla/Content";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
    </Routes>
  );
};

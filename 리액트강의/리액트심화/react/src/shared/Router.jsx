import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Empty from "../Pages/Empty";
import Main from "../Pages/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/empty" element={<Empty />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

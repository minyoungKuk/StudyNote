import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import MyPage from "../pages/MyPage";
import Works from "../pages/Works";
import DashBoardLayout from "./DashBoardLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="works/:id" element={<Works />} />
        <Route path="dashboard" element={<DashBoardLayout />}>
          <Route path="mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

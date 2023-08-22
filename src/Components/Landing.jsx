import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./Nav";
import Home from "./Home";
import Login from "./Login";

const Landing = () => {
  return (
    <BrowserRouter>
      <Nav />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Landing;

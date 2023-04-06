import {  Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Blogpage from "./components/Blogpage";
import Singleblog from "./components/Singleblog";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/singleblog" element={<Singleblog />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  )
}
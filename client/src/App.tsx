import React from "react";
import { Navbar, Sidebar } from "./components";
import { Login, Home, SinglePage } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Amiri:ital@1&family=Lobster+Two&family=Cormorant+Garamond:wght@300&family=Racing+Sans+One&family=Rajdhani:wght@500&family=Roboto+Mono:wght@100&display=swap"
        rel="stylesheet"
      ></link>
      <Router>
        <Navbar />
        {/* {isOpen && <Sidebar />} */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/hotel/:id" element={<SinglePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

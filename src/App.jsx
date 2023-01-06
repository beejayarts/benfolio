import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Sample from "./pages/Sample";

function App() {
  return (
    <div className="w-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/sample" exact element={<Sample />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

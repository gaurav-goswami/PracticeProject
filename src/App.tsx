import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Data from "./Pages/Data";
import LoginProtected from "./Protected/LoginProtected";
import DataProtected from "./Protected/DataProtected";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LoginProtected />}>
            <Route path="/data" element={<Data />} />
          </Route>
          <Route element={<DataProtected />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="*" element={<p>Page Not Found</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

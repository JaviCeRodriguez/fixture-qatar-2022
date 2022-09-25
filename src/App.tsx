import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import GroupStage from "./pages/GroupStage";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fase-grupos" element={<GroupStage />} />
    </Routes>
  );
};

export default App;

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import GroupStage from "./pages/GroupStage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/fase-grupos" element={<GroupStage />} />
    </Routes>
  );
};

export default App;

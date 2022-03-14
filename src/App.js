import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./components/DefaultLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

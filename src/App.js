import "./scss/style.scss";

import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./components/DefaultLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        

        <DefaultLayout />


      </BrowserRouter>
    </>
  );
}

export default App;

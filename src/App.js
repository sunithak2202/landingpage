
import './App.css';

import React from "react";
import "./App.css";

import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <div className="App">
     <Header title="My header" subtitle="subtitle2" />
      <Main message="My content" />
      <Footer note="Footer Note" />
    </div>
  );
}


//export default App;

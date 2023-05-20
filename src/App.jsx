import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Intro from "./components/Intro";

function App() {
  return (
    <section className="container">
      <Intro />
      <Form />
    </section>
  );
}

export default App;

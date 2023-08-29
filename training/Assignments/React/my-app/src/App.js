// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import NavBar from "./Week 4 Day 1/NavBar";
import ContactForm from "./Week 4 Day 1/ContactForm";
import CardTemplate from "./Week 4 Day 1/CardTemplate";

function App() {
  const [card, setCard] = useState({});

  return (
    <>
      <NavBar />
      <ContactForm setCard={setCard} />
      <CardTemplate card={card} />
    </>
  );
}

export default App;

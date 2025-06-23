import React from "react";
import "./styles.css";
import Header from "./components/Header/Header";
import Biografia from "./components/Biografia/Biografia";
import Proposta from "./components/Proposta/Proposta";
import Agenda from "./components/Agenda/Agenda";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Biografia />
        <Proposta />
        <Agenda />
        <Footer />
      </main>
    </div>
  );
}

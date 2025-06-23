import React, { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>
      <h1 className={styles.nomeCandidato}>Marco Madureira</h1>
      <button className={styles.menuButton} onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <a href="#bio" onClick={() => setIsOpen(false)}>
          Biografia
        </a>
        <a href="#proposta" onClick={() => setIsOpen(false)}>
          Propostas
        </a>
        <a href="#agenda" onClick={() => setIsOpen(false)}>
          Agenda
        </a>
        <a href="#mais" onClick={() => setIsOpen(false)}>
          Saiba Mais
        </a>
      </nav>
    </header>
  );
}

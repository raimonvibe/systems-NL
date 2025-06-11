'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import cover from "../../public/images/cover.webp"; // Ervan uitgaande dat dit pad correct is
import Dropdown11 from './Dropdown11'; // Ervan uitgaande dat Dropdown11 in dezelfde map staat

interface NavLink {
  href: string;
  label: string;
  target?: string;
}

const NavbarHome: React.FC = () => {
  const navLinks: NavLink[] = [
    { href: "/", label: "Home" }, // "Home" is gebruikelijk in het NL voor de startpagina
    // { href: "https://raimonvibe.pythonanywhere.com/", label: "BookHub", target: "_blank" },
    { href: "https://skills-hub.raimonvibe.com/", label: "SkillsHub", target: "_blank" }, // Naam van een project, waarschijnlijk ongewijzigd
    { href: "https://code-review.raimonvibe.com/", label: "Code Review", target: "_blank" }, // Engelse term vaak gebruikt
    { href: "https://www.physics-calculator.raimonvibe.com/", label: "Snelheidscalculator", target: "_blank" },
    { href: "https://www.physics-flashcards.raimonvibe.com/", label: "Natuurkunde Flashcards", target: "_blank" }, 
    { href: "https://retro-monitor.raimonvibe.com/", label: "Retro Monitor", target: "_blank" }, // Naam van een project
    { href: "https://animalguesses.raimonvibe.com/", label: "Dierenraden", target: "_blank" }, 
    { href: "https://www.emf-simulator.raimonvibe.com/", label: "EMK-Simulator", target: "_blank" }, // EMK is de Nederlandse term voor EMF
    { href: "https://tetris2.0.raimonvibe.com/", label: "Tetris 2.0", target: "_blank" }, // Naam
    { href: "https://periodic-table.raimonvibe.com/", label: "Periodiek Systeem", target: "_blank" }, 
    { href: "https://inventory-pro.raimonvibe.com/", label: "Inventory Pro", target: "_blank" }, 
    { href: "  https://google-login-edu.raimonvibe.com/", label: "Google Knop", target: "_blank" }, 
  ];

  return (
    <nav className="navbar">
      <Link href="/" aria-label="Home">
        <Image
          className="logo"
          src={cover}
          alt="Logo van mijn bedrijf"
          width={80}
          height={80}
          priority
          style={{ width: 'auto', height: 'auto' }}
        />
      </Link>
      <Dropdown11 links={navLinks} />
    </nav>
  );
};

export default NavbarHome;

'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import cover from "../../public/images/cover-nl.webp";
import Dropdown11 from './Dropdown11';

interface NavLink {
  href: string;
  label: string;
  target?: string;
}

const NavbarHome: React.FC = () => {
const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/Services", label: "Diensten" },
    { href: "/Opportunities", label: "Mogelijkheden" },
    { href: "/About", label: "Over Mij" },
    { href: "/Clients", label: "Klanten" },
    { href: "/ThreeDLibrary", label: "3D Bibliotheek" },
    { href: "/Certificates", label: "Certificaten" },
    { href: "/resume", label: "Mijn CV", target: "_blank" },
    { href: "https://systemen.raimonvibe.nl/", label: "Systemen", target: "_blank" }, 
    { href: "/Contact", label: "Contact" },
];

  return (
    <nav className="o-container">
      <Link href="/" aria-label="Thuis">
        <Image
          className="o-logo"
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

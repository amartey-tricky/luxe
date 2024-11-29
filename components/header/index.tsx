"use client";

import styles from "./index.module.css";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menu1 = [
  {
    id: 1,
    name: "Home",
    href: "/"
  },
  {
    id: 2,
    name: "Treatments",
    href: "/treatments"
  },
  {
    id: 3,
    name: "Products",
    href: "/products"
  }
]

const menu2 = [
  {
    id: 1,
    name: "About Us",
    href: "/about"
  },
  {
    id: 2,
    name: "Contact Us",
    href: "/contact"
  }
]

const mobileMenu = [
  {
    id: 1,
    name: "Home",
    href: "/"
  },
  {
    id: 2,
    name: "Treatments",
    href: "/treatments"
  },
  {
    id: 3,
    name: "Products",
    href: "/products"
  },
  {
    id: 4,
    name: "About Us",
    href: "/about"
  },
  {
    id: 5,
    name: "Contact Us",
    href: "/contact"
  }
]

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <nav className={styles.menu}>
          {/* Left Menu */}
          {menu1.map((item) => (
            <Link key={item.id} href={item.href} className={styles.menu_item}>
              {item.name}
            </Link>
          ))}
        </nav>
        <div className={styles.image_container}>
          {/* Central Logo */}
          <Link href="/">
            <Image
              src="https://utfs.io/f/NLBok024UocESdVltPx3Vtj2QJpluUD91egMziIZY4NTXGbc"
              alt="Luxe Clinic Logo"
              width={200}
              height={50}
            />
          </Link>
        </div>
        <nav className={styles.menu}>
          {/* Right Menu */}
          {menu2.map((item) => (
            <Link key={item.id} href={item.href} className={styles.menu_item}>
              {item.name}
            </Link>
          ))}
        </nav>
        <div>
          <Link href="/appointments">
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  )
}

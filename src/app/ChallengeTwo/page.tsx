"use client";
import Link from "next/link";
import styles from "./page.module.css";
import React, { useState } from "react";
import Image from "next/image";

const NAV_ITEMS = [
  { href: "/", label: "Showcase" },
  { href: "/", label: "Docs" },
  { href: "/", label: "Blog" },
  { href: "/", label: "Analytics" },
  { href: "/", label: "Templates" },
  { href: "/", label: "Enterprise" }
] as const;

export default function ChallengeTwoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <nav role="navigation" aria-label="Main navigation">
          <div className={styles["header-container"]}>
            {/* Logo */}
            <Link className={styles.logo} href="/" aria-label="AEON - Go to homepage">
              AEON
            </Link>

            {/* Search Button */}
            <button className={`${styles["toggle-btn"]} ms-auto`} type="button" aria-label="Search">
              <Image src="/search.svg" alt="" width={23} height={23} priority />
            </button>

            {/* Mobile Menu Toggle */}
            <button className={styles["toggle-btn"]} type="button" onClick={() => setIsMenuOpen((prev) => !prev)} aria-label={isMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMenuOpen} aria-controls="main-navigation">
              {isMenuOpen ? "✕" : "☰"}
            </button>

            {/* Navigation Menu */}
            <div id="main-navigation" className={`${styles["main-nav"]} ${isMenuOpen ? styles["show"] : ""}`} aria-hidden={!isMenuOpen}>
              <ul role="list">
                {NAV_ITEMS.map((item, index) => (
                  <li key={`${item.label}-${index}`}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>

              <div className={styles["search-container"]}>
                <input id="search-input" className={styles["search-input"]} type="search" placeholder="Search documentation.." aria-label="Search documentation" />
              </div>
            </div>
          </div>
        </nav>
      </header>

      <ul className="max-w-md mx-auto" style={{ listStyleType: "decimal", paddingLeft: "30px" }}>
        <li>By default, I used Tailwind CSS for styling.</li>
        <li>However, I implemented the Navbar entirely using pure CSS.</li>
        <li>This approach allowed me to have complete control over the styling and layout.</li>
        <li>The layout is responsive and works well on mobile devices.</li>
      </ul>
      <Link href="/" className="block text-center text-blue-600 hover:text-blue-800 underline mt-3">
        Go To Home Page
      </Link>
    </>
  );
}

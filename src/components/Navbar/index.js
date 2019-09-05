import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import navbarStyles from "./navbar.module.scss"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={navbarStyles.header}>
      <h1 className={navbarStyles.logo}>Logo</h1>
      <input
        type="checkbox"
        id="nav-toggle"
        className={navbarStyles.navToggle}
      ></input>
      <nav className={navbarStyles.navbar}>
        <ul className={navbarStyles.navList}>
          <li className={navbarStyles.navLi}>
            <Link
              className={navbarStyles.navItem}
              activeClassName={navbarStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className={navbarStyles.navLi}>
            <Link
              className={navbarStyles.navItem}
              activeClassName={navbarStyles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li className={navbarStyles.navLi}>
            <Link
              className={navbarStyles.navItem}
              activeClassName={navbarStyles.activeNavItem}
              to="/portfolio"
            >
              Portfolio
            </Link>{" "}
          </li>
          <li className={navbarStyles.navLi}>
            <Link
              className={navbarStyles.navItem}
              activeClassName={navbarStyles.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li className={navbarStyles.navLi}>
            <Link
              className={navbarStyles.navItem}
              activeClassName={navbarStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className={navbarStyles.navToggleLabel}>
        <span></span>
      </label>
    </header>
  )
}

export default Navbar

import React, { useState } from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md" className={styles.navbar}>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink className={styles.navItem} tag={Link} to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={styles.navItem} tag={Link} to="/about">
              About me
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to="/projects"
              className={styles.navItem}
              href="https://github.com/reactstrap/reactstrap"
            >
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to="/contact"
              className={styles.navItem}
              href="https://github.com/reactstrap/reactstrap"
            >
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import { Image } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavMobile from "./NavMobile";
import { CgClose } from "react-icons/cg";

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className="header-nav">
      <div className="nav-contents">
        <NavLink to="/" activeClassName="active">
          <Image src="/assets/logo-no-background.svg" w="6.2rem" />
        </NavLink>
        <div className="nav-links">
          <ul>
            <li>
              <NavLink
                className="header-nav-link"
                to="/"
                activeClassName="active"
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="header-nav-link"
                to="/events"
                activeClassName="active"
                onClick={closeMobileMenu}
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                className="header-nav-link"
                to="/about"
                activeClassName="active"
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-hamburger-menu">
          {open ? (
            <CgClose
              color="white"
              fontSize={32}
              onClick={() => setOpen(!open)}
            />
          ) : (
            <GiHamburgerMenu
              color="white"
              fontSize={32}
              onClick={() => setOpen(!open)}
            />
          )}
          {open && (
            <NavMobile isMobile={true} closeMobileMenu={closeMobileMenu} />
          )}
        </div>
      </div>
    </nav>
  );
};

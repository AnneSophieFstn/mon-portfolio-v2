import * as React from "react";
import MenuHamburger from "@mui/icons-material/Menu";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 1, x: 0 },
};

export default function Navbar() {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav>
      <div className="navBar">
        <div className="navBar__header">
          <h3 className="navBar__header__logo">Mon portfolio</h3>
          <motion.nav
            animate={showNavbar ? "open" : "closed"}
            variants={variants}
            className="navBar__btnToggle"
          >
            <MenuHamburger onClick={handleShowNavbar} />
          </motion.nav>
        </div>
        <ul className={`navBar__ul ${showNavbar && "navbar__show-links"}`}>
          <li>
            <a className="navBar__a" href="#home">
              Accueil
            </a>
          </li>
          <li>
            <a className="navBar__a" href="#">
              A propos
            </a>
          </li>
          <li>
            <a className="navBar__a" href="#">
              Compétences
            </a>
          </li>
          <li>
            <a className="navBar__a" href="#">
              Projets
            </a>
          </li>
          {showNavbar ? (
            <li>
              <a className="navBar__a" href="#">
                Contact
              </a>
            </li>
          ) : null}
        </ul>
        <div className="navBar__contact">
          <button>
            <a className="navBar__a" href="#">
              Contact <i className="fa-regular fa-address-card"></i>
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
}

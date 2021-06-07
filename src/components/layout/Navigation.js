import { useState } from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import glass from "../../assets/glass.svg";
import burger from "../../assets/burger.svg";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  function toggleMenu() {
    showMenu ? setShowMenu(false) : setShowMenu(true);
    sendAction();
  }

  function sendAction() {
    showMenu ? dispatch({ type: "show" }) : dispatch({ type: "hide" });
  }

  return (
    <section className="navigation">
      <img src={glass} alt="glass" />
      <Link to="/">
        <p>INNOAUDIO</p>
      </Link>
      <img
        onClick={toggleMenu}
        src={burger}
        alt="glass"
        style={{ pointerEvents: "all" }}
      />
    </section>
  );
};

export default Navigation;

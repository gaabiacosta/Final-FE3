import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/ContextGlobal";
import { useContext } from "react";
import styles from "./Navbar.module.css";
import button from "../components/utils/button.module.css";
function Navbar() {
  const temaContext = useContext(ContextGlobal);

  function handleClick() {
    temaContext.changeTheme();
    localStorage.setItem("theme", temaContext.theme);
  }
 let boton;
 if (temaContext.theme === "light") {
   boton = <button className={button.dark} onClick={handleClick}>Light</button>
 } else {
   boton = <button className={button.light} onClick={handleClick}>Dark</button>
 }

  return (
    <div className={temaContext.theme}>
      <div className={styles.position}>
        <nav className={styles.nav}>
          <Link to={"/"}>Home</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/favs"}>Favs</Link>
          {boton}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

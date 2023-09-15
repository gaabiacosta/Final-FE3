import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { useParams } from "react-router-dom";
import button from "../components/utils/button.module.css";
function Card({ user, esFav, handleFav, handleDetail }) {
  const [fav, setFav] = useState(esFav);
  function handleClick() {
    setFav(!esFav);
    handleFav(user.id, esFav);
  }

  return (
    <div className={styles.card}>
      <Link
        onClick={() => handleDetail(user.id)}
        to={`/detail/${user.id}`}
        key={user.id}
      >
        <div className={styles.datos}>
          <h2>{user.name}</h2>
          <p>Nombre de usuario: <br/>{user.username}</p>
          <img src="../../public/imagen-perfil.jpeg" alt="Imagen de perfil" />
        </div>
      </Link>

      <button className={button.button} onClick={handleClick}>
        {fav ? "Remove from Favs" : "Add to Favs"}
      </button>
    </div>
  );
}

export default Card;

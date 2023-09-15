import { useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/ContextGlobal";
import { useContext } from "react";
import styles from "./Favs.module.css";
function Favs() {
  const temaContext = useContext(ContextGlobal);
  const [favs, setFavs] = useState(
    JSON.parse(localStorage.getItem("favs")) || []
  );
  const [mensaje, setMensaje] = useState("Agrega algunos favoritos ;)");
  function handleFav(id, esFav) {
    if (esFav) {
      localStorage.setItem(
        "favs",
        JSON.stringify(favs.filter((fav) => fav.id !== id))
      );
      setFavs(favs.filter((fav) => fav.id !== id));
    }
  }
  function handleDetail(id) {
    localStorage.setItem("user", JSON.stringify(users.find((user) => user.id === id)));
  }
  return (
    <div className={temaContext.theme}>
      <section className={styles.favs}>
        {favs.map((user) => {
          return (
            <Card
              key={user.id}
              user= {user}
              handleFav={handleFav}
              handleDetail={handleDetail}
              esFav={favs.find((fav) => fav.name === user.name)}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Favs;

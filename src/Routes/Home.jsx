import Card from "../Components/Card";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/ContextGlobal";
import styles from "./Home.module.css";
function Home() {
  const temaContext = useContext(ContextGlobal);
  const [users, setUsers] = useState([]);
  const [favs, setFavs] = useState(
    JSON.parse(localStorage.getItem("favs")) || []
  );
  
  function handleFav(id, esFav) {
    if (esFav) {
      localStorage.setItem(
        "favs",
        JSON.stringify(favs.filter((fav) => fav.id !== id))
      );
      setFavs(favs.filter((fav) => fav.id !== id));
    } else {
      let user = users.find((user) => user.id === id);
      let newFavs = [...favs, user];
      setFavs(newFavs);
      localStorage.setItem("favs", JSON.stringify(newFavs));
    }
  }
  console.log(favs);

  async function handleFetch() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(
      data.map((user) => {
        return {
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
          website: user.website,
        };
      })
    );
  }

  useEffect(() => {
    handleFetch();
  }, []);

  function handleDetail(id) {
    localStorage.setItem("user", JSON.stringify(users.find((user) => user.id === id)));
  }

  return (
    <div className={temaContext.theme}>
      <div className={styles.home}>
        {users.map((user) => {
          return (
            <Card
              key={user.id}
              user={user}
              handleFav={handleFav}
              handleDetail={handleDetail}
              esFav={favs.find((fav) => fav.id === user.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;

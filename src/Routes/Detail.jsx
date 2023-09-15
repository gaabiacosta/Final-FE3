
import { useState } from "react";
function Detail() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );
  console.log(user);
  
  return (
    <div>
      <p>Nombre: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <p>Website: {user.website}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}

export default Detail;

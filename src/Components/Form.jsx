import { useState } from "react";
import styles from "./Form.module.css";
import button from "../components/utils/button.module.css";
export default function Form() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [alerta, setAlerta] = useState("");
  const [error, setError] = useState(false);

  function manejarSubmit(e) {
    e.preventDefault();
    if (nombre[0] === " ") {
      setAlerta("El nombre no puede comenzar con un espacio");
      setError(true);
    } else if (nombre.length < 6) {
      setAlerta("El nombre debe tener más de 5 caracteres");
      setError(true);
    } else {
      setAlerta(`Gracias ${nombre}! Te contactaremos cuanto antes via email.`);
      setNombre("");
      setEmail("");
      console.log({ nombre: nombre, email: email });
    }
  }

  return (
    <form className={styles.form} onSubmit={manejarSubmit}>
      <label htmlFor="nombre">Nombre: </label>
      <input
        type="text"
        id="nombre"
        onChange={(e) => setNombre(e.target.value)}
        value={nombre}
      />
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <button className={button.button} type="submit">ENVIAR</button>
      {alerta ? <div className={error ? styles.error : styles.alerta}>{alerta}</div> : undefined}
    </form>
  );
}

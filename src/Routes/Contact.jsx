import Form from "../Components/Form";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/ContextGlobal";
function Contact() {
  const temaContext = useContext(ContextGlobal);
  return (
    <div className={temaContext.theme}>
        <Form />
    </div>
  );
}

export default Contact;

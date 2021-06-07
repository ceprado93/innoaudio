import { useSelector } from "react-redux";
import { selectOption } from "../redux/store";

const Footer = () => {
  const toogleOption = useSelector(selectOption);

  if (toogleOption) {
    return null;
  }

  return (
    <footer>
      <ul>
        <li>Páginas </li>
        <li>Contacto</li>
        <li>Política de privacidad</li>
        <li>Política de cookies</li>
        <li>Aviso legal</li>
        <li>Redes</li>
      </ul>
    </footer>
  );
};

export default Footer;

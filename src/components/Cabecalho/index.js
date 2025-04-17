import { Link } from "react-router-dom";
import { FcDisplay } from "react-icons/fc";
import styles from "./Cabecalho.module.css";
import CabecalhoLink from "../CabecalhoLink";

const Cabecalho = () => {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
      <FcDisplay size={40} />

      </Link>
      <nav>
        <CabecalhoLink url="./">Home</CabecalhoLink>
        <CabecalhoLink url="./favoritos">Favoritos</CabecalhoLink>
      </nav>
    </header>
  );
};

export default Cabecalho;

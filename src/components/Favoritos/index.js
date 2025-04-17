import Banner from "../Banner";
import Card from "../Card";
import { useFavoritoContext } from "../Contextos/Favoritos";
import Titulo from "../Titulo";
import styles from "./Favoritos.module.css";

const Favoritos = () => {
  const { favorito } = useFavoritoContext();
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
};

export default Favoritos;

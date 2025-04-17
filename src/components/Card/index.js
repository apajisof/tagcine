import styles from './Card.module.css';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import { useFavoritoContext } from '../Contextos/Favoritos';
import { Link } from 'react-router-dom';

const Card = ({ id, titulo, capa }) => {
  const { favorito, adicionarFavorito } = useFavoritoContext();

  const ehFavorito = favorito.some(fav => fav.id === id);

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <h2>{titulo}</h2>
      </Link>
      <div className={styles.favoritar}>
        {ehFavorito ? (
          <MdOutlineFavorite
            title="Remover dos favoritos"
            onClick={() => adicionarFavorito({ id, titulo, capa })}
          />
        ) : (
          <MdOutlineFavoriteBorder
            title="Adicionar aos favoritos"
            onClick={() => adicionarFavorito({ id, titulo, capa })}
          />
        )}
      </div>
    </div>
  );
};

export default Card;

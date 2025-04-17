import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import styles from "./Player.module.css";
import { useParams } from "react-router-dom";
import NoPage from "../NoPage";
import { useEffect, useState } from "react";

const Player = () => {
  const [video, setVideos] = useState();

  const parametros = useParams();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/apajisof/tagcine/videos?id=${parametros.id}`
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideos(...dados);
      });
  }, []);

  if (!video) {
    return (
      <>
        <NoPage />
        <Banner imagem="player" />
        <Titulo>
          <h1>Vídeo não encontrado 😢</h1>
        </Titulo>
        <section className={styles.container}>
          <p>O vídeo solicitado não existe ou foi removido.</p>
        </section>
      </>
    );
  }

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="560"
          height="315"
          src={video.link}
          title={video.titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
};

export default Player;

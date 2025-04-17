import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio/Index";
import Favoritos from "./components/Favoritos";
import Cabecalho from "./components/Cabecalho/index.js";
import Rodape from "./components/Rodape/index.js";
import Container from "./components/Container/index.js";
import FavoritosProvider from "./components/Contextos/Favoritos.js";
import Player from "./pages/Player/index.js";
import NoPage from "./pages/NoPage/index.js";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/favoritos" element={<Favoritos />}></Route>
            <Route path="/:id" element={<Player />}></Route>
            <Route path="*" element={<NoPage />}></Route>
          </Routes>
        </FavoritosProvider>
      </Container>
      <Rodape />
    </BrowserRouter>
  );
};

export default AppRoutes;

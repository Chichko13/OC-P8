import { useRouteError, NavLink } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Header />
      <div className="error">
        <h1 className="error__title">404</h1>
        <p className="error__text">
          Oups ! La page que vous demandez n'existe pas.
        </p>
        <p>
          <NavLink to="/" className="active">
            Retourner sur la page d'acceuil
          </NavLink>
        </p>
      </div>
      <Footer />
    </div>
  );
}

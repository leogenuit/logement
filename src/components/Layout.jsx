import { Link } from "react-router-dom";
import "./Layout.scss";
const Layout = () => {
  return (
    <>
      <nav className="layout-nav">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/list">Voir les appartements</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Layout;

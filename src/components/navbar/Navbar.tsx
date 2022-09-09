import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    let dataLocalStorage = localStorage["userData"];
    if (dataLocalStorage) {
      setUserData(JSON.parse(dataLocalStorage));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("userData");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand">
          Práctica
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Nosotros
              </Link>
            </li>
          </ul>
          {userData && (
            <form className="d-flex" role="search">
              <button onClick={logout} className="btn btn-outline-success" type="submit">
                Cerrar Sesión
              </button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

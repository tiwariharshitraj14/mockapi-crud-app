import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const allUsers = useSelector((state) => state.user.users);
  const count = allUsers.length;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container-fluid">
          <h4 className="navbar-brand fw-bold text-primary">RTK</h4>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link fw-semibold ${
                    currentPath === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Create Post
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link fw-semibold ${
                    currentPath === "/read" ? "active" : ""
                  }`}
                  to="/read"
                >
                  All Post ({count})
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search rounded-pill">
              <input
                className="form-control me-2 rounded-pill"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <button
                className="btn btn-outline-secondary rounded-pill"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">JOHN DOE</NavLink>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto text-uppercase">
            {["/", "/services", "/portfolio", "/contact"].map((path, i) => (
              <li className="nav-item" key={i}>
                <NavLink className="nav-link" to={path}>
                  {path === "/" ? "Home" : path.replace("/", "")}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

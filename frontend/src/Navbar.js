import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="border-bottom">
            <nav className="navbar navbar-expand-md bg-dark-subtle">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Todos
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link" to="/new">
                                New
                            </Link>
                            <Link className="nav-link active" aria-current="page" to="/random">
                                Random
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

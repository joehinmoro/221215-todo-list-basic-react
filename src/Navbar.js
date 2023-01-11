const Navbar = () => {
    return (
        <header className="border-bottom">
            <nav className="navbar navbar-expand-md bg-dark-subtle">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        Todos
                    </a>
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
                            <a className="nav-link active" aria-current="page" href="/random">
                                Random
                            </a>
                            <a className="nav-link" href="/new">
                                New
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

const Navbar = () => {
    return (
        <header className="border-bottom">
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        ToDo
                    </a>
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/">
                            New
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

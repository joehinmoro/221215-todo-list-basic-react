import { Link } from "react-router-dom";

const Error = ({ error }) => {
    return (
        <div className="container text-center mt-5">
            <div className="row justify-content-center">
                <div className=" col-sm-12 col-md-10 col-lg-8 col-xl-6 border p-5 border-danger-subtle">
                    <h3 className="mt-3 text-danger">Error :(</h3>
                    <h4 className="text-danger">{error}</h4>
                    <h4>
                        {/* return to root route */}
                        <Link to={"/"}>Return Home</Link>
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default Error;

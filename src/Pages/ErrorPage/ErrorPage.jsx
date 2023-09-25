import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto space-y-3 text-center">
            <h3 className="text-gray-800 text-4xl font-semibold sm:text-5xl">
                Page not found
            </h3>
            <p className="text-gray-600">
                Sorry, the page you are looking for could not be found.
            </p>
            <NavLink to="/">
                <button className="btn btn-primary mt-2 px-8">Home</button>
            </NavLink>
        </div>
    </div>
    );
};

export default ErrorPage;
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-col lg:flex-row justify-between items-center py-3 shadow-md px-5">
        <div>
          <img src="https://i.ibb.co/TBXMDSp/Logo.png" alt="" />
        </div>

        <div className="mt-5 lg:mt-0">
          <ul className="flex gap-5">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-500 underline text-lg font-medium"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-500 underline text-lg font-medium"
                    : ""
                }
              >
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-500 underline text-lg font-medium"
                    : ""
                }
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

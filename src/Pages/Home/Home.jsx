import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1 className="text-7xl text-center font-extrabold text-[#F8714726]">Donation</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;
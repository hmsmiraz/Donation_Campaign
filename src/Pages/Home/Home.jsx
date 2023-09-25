import Donations from "../../Components/Donations/Donations";
import Banner from "../../Components/Header/Banner/Banner";
import useGetDonations from "../../Components/Hook/useGetDonations";

const Home = () => {

    const [donations] = useGetDonations()
    
    return (
        <div>
            <Banner></Banner>
            <Donations donations={donations} ></Donations>
        </div>
    );
};

export default Home;
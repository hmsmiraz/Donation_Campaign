import DonationCards from "./DonationCards";

const Donations = ({ donations }) => {
    
    return (
        <div className="mt-10 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                   donations?.map(donation=><DonationCards key={donation.id} 
                   donation={donation}></DonationCards>) 
                }
            </div>
        </div>
    );
};

export default Donations;
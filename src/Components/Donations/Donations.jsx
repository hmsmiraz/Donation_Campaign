import { useState } from "react";
import DonationCards from "./DonationCards";

const Donations = ({ donations, handleSearch }) => {
  // let searchText = handleSearch.toLowerCase();
  // console.log(searchText);

  const [displayDonation, setDisplayDonation] = useState([]);
  const [filterDonation, setFilterDonation] = useState([]);

  const handleDonationFilter = (handleSearch) => {
    if (handleSearch === "Health") {
      const category = donations.filter(
        (donation) => donation.category === "Health"
      );
      setFilterDonation(displayDonation);
    } 
    else if (handleSearch === "Education") {
      const category = donations.filter(
        (donation) => donation.category === "Education"
      );
      setFilterDonation(displayDonation);
    } 
    else if (handleSearch === "Food") {
      const category = donations.filter(
        (donation) => donation.category === "Food"
      );
      setFilterDonation(displayDonation);
    } 
    else if (handleSearch === "Clothing") {
      const category = donations.filter(
        (donation) => donation.category === "Clothing"
      );
      setFilterDonation(displayDonation);
    }
  };

  return (
    <div className="mt-5 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {donations?.map((donation) => (
          <DonationCards key={donation.id} donation={donation}></DonationCards>
        ))}
      </div>
    </div>
  );
};

export default Donations;

import { useEffect, useState } from "react";
import DonationAllCard from "./DonationAllCard";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [noDonations, setNoDonations] = useState(false);

  const [dataLength, setDataLength] = useState(4);
  console.log(donations.length);

  useEffect(() => {
    const donationsItems = JSON.parse(localStorage.getItem("donations"));
    if (donationsItems) {
      setDonations(donationsItems);
    } else {
      setNoDonations("No,You don't give any Donation");
    }
  }, []);
  return (
    <div>
      {noDonations ? (
        <p className="h-[80vh] flex justify-center items-center">
          {noDonations}
        </p>
      ) : (
        <div>
          <div className="grid grid-col-1 lg:grid-cols-2 gap-5 mt-5">
            {donations?.slice(0, dataLength).map((donation) => (
              <DonationAllCard
                key={donation.id}
                donation={donation}
              ></DonationAllCard>
            ))}
          </div>
          <div className={dataLength === donations.length ? "hidden" : ""}>
            <div className="flex items-center justify-center my-5">
              <button
                onClick={() => setDataLength(donations.length)}
                className="btn btn-primary px-6"
              >
                Show All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;

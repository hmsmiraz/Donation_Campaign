import { useLoaderData } from "react-router-dom";
import { Chart } from "react-google-charts";

const Statistics = () => {
  const donations = useLoaderData();
  const totalDonations = donations.length;

  const donationsItems = JSON.parse(localStorage.getItem("donations"));
  const myDonations = donationsItems.length;


    const data = [
      ["Total Donation", "My Donations"],
      ["Total Donation", totalDonations],
      ["My Donations", myDonations],
    ];

  return (
    <div className="shadow-lg mt-10">
      <Chart chartType="PieChart" data={data} width={"100%"} height={"400px"} /> 
    </div>
  );
};

export default Statistics;

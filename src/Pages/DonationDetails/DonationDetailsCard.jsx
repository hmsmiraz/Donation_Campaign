import { Link, NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DonationDetailsCard = ({ donation }) => {
  const { id, thumbnail, title, description, price, card_bg, text_button_bg } =
    donation || {};

  const handleDonate = () => {
    const addedDonationsArray = [];
    const donationsItems = JSON.parse(localStorage.getItem("donations"));
    const idInt = parseInt(id);
    if (!donationsItems) {
      addedDonationsArray.push(donation);
      localStorage.setItem("donations", JSON.stringify(addedDonationsArray));
      toast.success("Donations Add Successfully, Thank You");
    } else {
      const isExits = donationsItems.find((phone) => phone.id == idInt);
      if (!isExits) {
        addedDonationsArray.push(...donationsItems, donation);
        localStorage.setItem("donations", JSON.stringify(addedDonationsArray));
        toast.success("Donations Add Successfully, Thank You");
      } else {
        toast.error("Sorry, You can't donate twice");
      }
    }
  };

  return (
    <div className="flex flex-col card mx-auto mt-3 shadow-lg">
      <div>
        <div className="w-full relative">
          <figure>
            <img
              src={thumbnail}
              alt="Album"
              className="w-[800px] h-[400px] rounded-lg"
            />
          </figure>
        </div>
        <div className="flex items-center lg:ml-[250px] lg:w-[800px] absolute top-80 lg:bottom-40 bg-[#0B0B0B80]  py-5">
          <button
            onClick={handleDonate}
            className="btn ml-2 text-white border-none rounded-lg"
            style={{ background: text_button_bg }}
          >
            Donate${price}
          </button>
        </div>
      </div>
      <div className=" mx-auto lg:mx-64 pl-2 mt-5">
        <h2 className="font-bold text-4xl pb-3">{title}</h2>
        <p className="py-2 text-base">{description}</p>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <NavLink to="/" className="flex items-end justify-end">
        <button className="btn btn-primary mt-2 px-8 absolute  bottom-4">Back Home</button>
      </NavLink>
    </div>
  );
};

export default DonationDetailsCard;

import { Link } from "react-router-dom";

const DonationCards = ({ donation }) => {
  const { id, thumbnail, title, category, card_bg, text_button_bg } =
    donation || {};

  return (
    <Link to={`/donations/${id}`}>
      <div
        className="card card-compact shadow-xl style"
        style={{ background: card_bg }}
      >
        <figure>
          <img src={thumbnail} alt="Shoes" />
        </figure>
        <div className="card-body" style={{ color: text_button_bg }}>
          <p
            className="py-2 px-4 rounded mr-48 text-sm font-medium text-center"
            style={{ background: card_bg }}
          >
            {category}
          </p>
          <p className="font-semibold text-xl">{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default DonationCards;

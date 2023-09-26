const DonationAllCard = ({ donation }) => {
  const { id, picture, category, title, price, card_bg, text_button_bg } =
    donation || {};
  return (
    <div
      className="card lg:card-side shadow-xl"
      style={{ background: card_bg }}
    >
      <figure>
        <img src={picture} alt="" />
      </figure>
      <div className="card-body">
        <div style={{ color: text_button_bg }}>
        <p
          className="py-2 px-2 rounded mr-56 text-sm font-medium text-center"
          style={{ background: card_bg }}
        >
          {category}
        </p>
        </div>
        <h2 className="card-title">{title}</h2>
        <p style={{ color: text_button_bg }}>${price}</p>
        <div className="card-actions">
          <button className="btn text-white" style={{ background: text_button_bg }}>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default DonationAllCard;

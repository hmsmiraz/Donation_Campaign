import { useState } from "react";
import Donations from "../../Donations/Donations";

const Banner = ( ) => { 

  const [text, setText] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(text)
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div
      className="hero min-h-[160px] lg:min-h-[400px]"
      style={{
        backgroundImage: "url(https://i.ibb.co/pzWR8pj/Rectangle-4281.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-90 bg-white"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-5 text-5xl font-bold text-black">
            I Grow By Helping People In Need
          </h1>

          <form className="form-control" onSubmit={handleSearch}>
            <div className="input-group">
              <input
              onChange={handleTextChange}
                type="text"
                placeholder="Search by Health/Education/Food/Clothing"
                className= "input border-black lg:w-80 text-black"
              />
              <button onClick={handleSearch} className="btn bg-[#FF444A] text-white">Search</button>
            </div>
          </form>
        </div>
      </div>
      <Donations onButtonClick={handleSearch}></Donations>
      
    </div>
  );
};

export default Banner;

const Banner = () => {
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

          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search here..."
                className="input input-bordered lg:w-80"
              />
              <button className="btn bg-[#FF444A] text-white">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

const Banner = () => {
  return (
    <div className="px-4 md:px-24 bg-black flex items-center">
      <div className="w-full py-40 flex items-center">
        {/* Lift side */}
        <div className="h-full space-y-8 text-center">
          <h2 className=" text-6xl font-bold leading-snug text-white">
            Create Your First Content
            <p className="text-orange-500">for the civilization</p>
          </h2>
          <p className="md:w-8/12 mx-auto text-white">
            Join a global community of thinkers and creators. Empower the world
            with your wisdom. Take the first step in sharing your knowledge by
            creating your inaugural blog post on our platform.Your unique
            perspective adds value let your voice be the catalyst for positive
            change. Start shaping the future today.
          </p>
          <div className="">
            <input
              className=" py-2 px-2 rounded-s-lg outline-none"
              type="search"
              name="search"
              id="search"
              placeholder="Search a blog..."
            />
            <button className="bg-orange-500 px-6 py-2 text-white font-medium hover:bg-orange-700 transition-all ease-in duration-200 rounded-e-lg">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

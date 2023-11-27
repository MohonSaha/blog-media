// eslint-disable-next-line react/prop-types
const SectionTitle = ({ bgText, mainText }) => {
  return (
    <div className="px-4 md:px-32 pt-8 bg-slate-300/40">
      <div className="">
        <h1 className="text-7xl text-center font-bold text-slate-400/50">
          {bgText}
        </h1>
      </div>
      <p className="font-bold  text-orange-600 text-3xl text-center relative bottom-11">
        {mainText}
      </p>
    </div>
  );
};

export default SectionTitle;

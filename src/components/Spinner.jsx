import HashLoader from "react-spinners/HashLoader";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <HashLoader
        color="#36d7b7"
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;

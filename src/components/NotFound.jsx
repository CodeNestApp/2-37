import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-1/2">
      <p className="text-center text-3xl font-extrabold">Not Found!</p>
      <Link to={"/"}>
        <p className="text-center mt-5">Take me Home</p>
      </Link>
    </div>
  );
};

export default NotFound;

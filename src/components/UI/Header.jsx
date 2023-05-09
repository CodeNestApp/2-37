import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="top-0 p-2 bg-indigo-700 max-w-screen">
      <Link to={"/"}>
        <span className="font-extrabold text-3xl cursor-pointer text-white">
          Notes
        </span>
      </Link>
    </div>
  );
};

export default Header;

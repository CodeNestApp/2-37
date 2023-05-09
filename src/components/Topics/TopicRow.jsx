import { Link } from "react-router-dom";
import ProgressBar from "../UI/ProgressBar";

const TopicRow = ({ id, title, status, progress }) => {
  return (
    <div className="m-5">
      <Link to={`topics/${id}`}>
        <div className="p-2 cursor-pointer hover:border-indigo-500 pr-4 hover:text-indigo-700">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">{title}</div>
            <div className="italic">{status}</div>
          </div>
        </div>
      </Link>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default TopicRow;

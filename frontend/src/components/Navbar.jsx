import { useContext } from "react";
import { Link } from "react-router-dom";
import { TaskManagerContext } from "./contextpage/TaskContext";

const Navbar = () => {
  const { search, setSearch, reloadpage } = useContext(TaskManagerContext);
  return (
    <>
      <nav className="bg-green-800 text-white w-full top-0 left-0">
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between space-y-2">
          <ul className="flex space-x-6 text-lg font-medium">
            <li className="hover:text-gray-300 transition">
              <Link to="/">Tasks</Link>
            </li>
            <li className="hover:text-gray-300 transition">
              <Link to="/Tasklist">TaskUpdate</Link>
            </li>
            <li className="hover:text-gray-300 transition">
              <Link to="/addtask">AddTask</Link>
            </li>
          </ul>
          <div className="flex space-x-2 w-full md:w-auto">
            <input
              type="text"
              className="w-full md:w-64 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Task title"
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
              onClick={reloadpage}
            >
              Search
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

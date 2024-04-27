import { Link } from "react-router-dom";

const AppBar = () => {
  return (
    <>
      <div className="border border-black flex justify-between  items-center px-20 pt-3">
        <div className=" font-bold text-3xl hover:cursor-pointer">
          <Link to="/dashboard">AirBlog</Link>
        </div>

        <div className="flex gap-3 ">
          <button className="bg-green-700 rounded-xl text-white w-16">
            Publish
          </button>
          <div>Icon</div>
          <div>NotifyIcon</div>
          <div>Icon</div>
        </div>
      </div>
    </>
  );
};

export default AppBar;

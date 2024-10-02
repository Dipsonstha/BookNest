import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <div className="sticky top-0 flex items-center px-10 justify-between w-full  bg-[#f7f7f7] h-[10vh]">
      <div>
        <h1>Booknest</h1>
      </div>
      <div>
        <ul className="flex gap-5">
          <li>
            <Link to={"/admin/adminDashboard"}>Home</Link>{" "}
          </li>

          <li>
            <Link to={"/admin/userList"}>Users</Link>
          </li>
          <li>
            <Link to={"/admin/ads"}>Ads</Link>
          </li>
          <li>Log-Out</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminNav;

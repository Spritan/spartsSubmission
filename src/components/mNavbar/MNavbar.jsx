import {
  Dashboard,
  More,
  NotificationsOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import "./mNavbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const MNavbar = () => {
  const [selectedtitle, setSelectedtitle] = useState("Dashboard");
  const handelClick = (e) => setSelectedtitle(e);
  return (
    <div className="MNavbar">
      <div className="container">
        <div className="frame">
          <div className="bar">
            <Link
              to="/"
              className={`els-wrap el-1 ${
                selectedtitle === "Dashbaord" ? "active" : ""
              }`}
              onClick={() => handelClick("Dashbaord")}
            >
              <div className="icon">
                <Dashboard />
              </div>
              {/* <p className="label">Dashbaord</p> */}
            </Link>
            <Link
              to="/Search"
              className={`els-wrap el-2 ${
                selectedtitle === "Search" ? "active" : ""
              }`}
              onClick={() => handelClick("Search")}
            >
              <div className="icon">
                <SearchOutlined />
              </div>
              {/* <p className="label">Feeds</p> */}
            </Link>
            <Link
              to="/more"
              className={`els-wrap el-3 ${
                selectedtitle === "more" ? "active" : ""
              }`}
              onClick={() => handelClick("more")}
            >
              <div className="icon">
                <More />
              </div>
              {/* <p className="label">Chat</p> */}
            </Link>
            <Link
              to="/notifications"
              className={`els-wrap el-4 ${
                selectedtitle === "notifications" ? "active" : ""
              }`}
              onClick={() => handelClick("notifications")}
            >
              <div className="icon">
                <NotificationsOutlined />
              </div>
              {/* <p className="label">Updates</p> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MNavbar;

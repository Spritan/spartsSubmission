import { Dashboard, More, NotificationsOutlined, SearchOutlined } from "@mui/icons-material";
import "./mNavbar.scss";
import { Link } from "react-router-dom";

const MNavbar = () => {
  return (
    <div className="MNavbar">
      <div className="container">
        <div className="frame">
          <div className="bar">
            <Link to='/' className="els-wrap el-1">
              <div className="icon">
                <Dashboard />
              </div>
              {/* <p className="label">Dashbaord</p> */}
            </Link>
            <Link to='/Search' className="els-wrap el-2">
              <div className="icon">
                <SearchOutlined />
              </div>
              {/* <p className="label">Feeds</p> */}
            </Link>
            <Link to='/more' className="els-wrap el-3">
              <div className="icon">
                <More />
              </div>
              {/* <p className="label">Chat</p> */}
            </Link>
            <Link to='/notifications' className="els-wrap el-4">
              <div className="icon">
                <NotificationsOutlined/>
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

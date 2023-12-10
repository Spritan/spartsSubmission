import { useEffect, useState } from "react";
import {
  DashboardOutlined,
  InfoOutlined,
  Menu,
  MonetizationOnOutlined,
  PeopleOutline,
  Person2Outlined,
  ScheduleOutlined,
  SchoolOutlined,
  Search,
} from "@mui/icons-material";

import "./sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1242);
  const [selectedtitle, setSelectedtitle] = useState("Dashboard");
  console.log(isSmallScreen);
  const [isOpen, setIsOpen] = useState(!isSmallScreen);
  const toggle = () => setIsOpen(!isOpen);
  const sidebarTopData = [
    {
      title: "Dashboard",
      icon: <DashboardOutlined />,
      link: "/",
    },
    {
      title: "Academy management",
      icon: <SchoolOutlined />,
      link: "/academic",
    },
  ];
  const sidebarButtomData = [
    {
      title: "Students",
      icon: <PeopleOutline />,
      link: "/students",
    },
    {
      title: "Fee Payment",
      icon: <MonetizationOnOutlined />,
      link: "/Fee",
    },
    {
      title: "Enquiries",
      icon: <InfoOutlined />,
      link: "/enquiries",
    },
    {
      title: "Coaches",
      icon: <Person2Outlined />,
      link: "/coaches",
    },
    {
      title: "Schedule",
      icon: <ScheduleOutlined />,
      link: "/schedule",
    },
  ];

  const handelClick = (e) => setSelectedtitle(e);

  return (
    <div className="CompanySidebar">
      <div className="Sidebar_">
        <div style={{ width: isOpen ? "370px" : "70px" }} className="Sidebar">
          <div className="top_section">
            <div
              style={{ marginLeft: isOpen ? "260px" : "1.2em" }}
              className="bars"
            >
              <Menu onClick={toggle} />
            </div>
          </div>
          <div className="menus">
            <div className="MainMenu">
              <ul className="SidebarList">
                {isOpen && <div className="heading">Main Menu</div>}
                {sidebarTopData.map((val, key) => {
                  return (
                    <Link
                      key={key}
                      className={`row 
                    ${selectedtitle === val.title ? "active" : ""}
                    `}
                      onClick={() => handelClick(val.title)}
                      to={val.link}
                    >
                      {/* <Link to={val.link} style={dis}> */}
                        <div>{val.icon}</div>
                        <div>{isOpen && val.title}</div>
                      {/* </Link> */}
                    </Link>
                  );
                })}
              </ul>
            </div>
            <div className="More">
              <ul className="SidebarList">
                {isOpen && <div className="heading">More</div>}
                {isOpen && (
                  <div className="searchBar">
                    <span className="searchIcon">
                      <Search />
                    </span>
                    <input
                      type="text"
                      placeholder="Search students by name"
                      className="searchInput"
                    />
                  </div>
                )}
                {sidebarButtomData.map((val, key) => {
                  return (
                    <Link
                      key={key}
                      className={`row 
                    ${selectedtitle === val.title ? "active" : ""}
                    `}
                      onClick={() => handelClick(val.title)}
                      to={val.link}
                    >
                      {/* <Link to={val.link} style={dis}> */}
                        <div>{val.icon}</div>
                        <div>{isOpen && val.title}</div>
                      {/* </Link> */}
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Sidebar;

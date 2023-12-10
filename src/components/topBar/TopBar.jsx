import { useEffect, useState } from "react";

import { NotificationImportantOutlined, SettingsOutlined } from "@mui/icons-material";

import User_img from "../../assets/images/user.jpg";
import Logo from "../../assets/images/SpartsLogo.png";
import "./topBar.scss";

const TopBar = () => {
  const [day, setDay] = useState("--");
  const [date, setDate] = useState("00:00");
  const [month, setmonth] = useState("");
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    // Function to update time and date
    const updateTimeAndDate = () => {
      const currentDate = new Date();
      const day = currentDate.getDay();
      const mon = currentDate.getMonth();
      const date_ = currentDate.getDate();

      // Get day and month names
      const day_ = dayNames[day];
      const mon_ = monthNames[mon];

      // Update state variables
      setDay(day_);
      setDate(date_);
      setmonth(mon_);
    };

    // Call the function to update immediately when the component mounts
    updateTimeAndDate();

    // Set up an interval to update time and date every second
    const timer = setInterval(updateTimeAndDate, 1000);

    // Clean up the interval on unmount
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="topBar">
      <div className="frontHalf">
        <div className="logo_n_date">
          <img src={Logo} alt="Sparts Logo" />
          <p>
            {day}, {date} {month}
          </p>
        </div>
        <div className="Welcome">
          <div className="heading">Welcome Cynthia</div>
          <div className="bdy">Here is a summary of your bussiness</div>
        </div>
      </div>
      <div className="endHalf">
        <div className="btns">
          <div className="_btn">
            <NotificationImportantOutlined sx={{ fontSize: 40 }} />
          </div>
          <div className="_btn">
            <SettingsOutlined sx={{ fontSize: 40 }} />
          </div>
        </div>
        <div className="spacer">

        </div>
        <div className="user">
          <div className="user_pic">
            <img src={User_img} alt="user_pic" />
          </div>
          <div className="user_details">
            <div className="user_name">Cynthia John</div>
            <div className="user_email">cj@example.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

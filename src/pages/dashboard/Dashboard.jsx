import { useState } from "react";

import Dropdown from "../../components/dropdown/Dropdown";
import PieChart from "../../components/pieChart/PieChart";
import BarChart from "../../components/barChart/BarChart";

import {
  ArrowCircleDownOutlined,
  FilterAltOutlined,
  MoreHoriz,
  Square,
} from "@mui/icons-material";

import jsonData from "../../data/dashboard.json";
import "./dashboard.scss";

const Dashboard = () => {
  const {
    active_student,
    active_coachers,
    amounts,
    categories,
    schedule,
    labels,
    datasets1,
    datasets2,
  } = jsonData;

  const [selectedCategory, setSelectedCategory] = useState("All");

  const data1 = {
    labels,
    datasets: datasets1,
  };
  const data2 = {
    labels,
    datasets: datasets2,
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="Dashboard">
      <div className="bdy">
        <div className="row">
          <div className="active_SC">
            <div className="heading_">
              <div>ACTIVE STUDENTS</div> <div>ACTIVE COACHES</div>
            </div>
            <div className="numbers_">
              <div>{active_student}</div> <div>{active_coachers}</div>
            </div>
          </div>
          <div className="QuickAction">
            <div className="headings">QUICK ACTIONS</div>
            <div className="btns">
              <div className="btn">+ Add new student</div>
              <div className="btn">Collect fees</div>
              <div className="btn">+ Add new enquiry</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="FeeSummary">
            <div className="head">
              <div className="name">FEES PAYMENT SUMMARY</div>
              <div className="dropdown">
                <Dropdown />
              </div>
            </div>
            <PieChart amount={amounts} />
            <div className="legand">
              <div className="legend-box">
                <div className="head">
                  <div className="color1">
                    <Square />
                  </div>
                  <div style={{ color: "#9f9f9f" }}>{amounts[0].label} </div>
                </div>
                <div className="amount">
                <strong>{`₹${amounts[0].amount} `}</strong> by {amounts[0].student} students
                </div>
              </div>
              <div className="legend-box">
                <div className="head">
                  <div className="color2">
                    <Square />
                  </div>
                  <div style={{ color: "#9f9f9f" }}>{amounts[1].label}</div>
                </div>
                <div className="amount">
                  <strong>{`₹${amounts[1].amount} `}</strong> by {amounts[1].student} students
                </div>
              </div>
            </div>
          </div>
          <div className="growth">
            <div className="head">
              <div className="name">MONTH-ON-MONTH GROWTH</div>
              <div className="dropdown">
                <Dropdown />
                <ArrowCircleDownOutlined className="down" />
              </div>
            </div>
            <div className="chart">
              <div>
                <BarChart data={data1} text="Revenue" />
              </div>
              <div>
                <BarChart data={data2} text="Students" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="schedule">
            <div className="head">
              <div className="name">UPCOMING SCHEDULE</div>
              <div className="btndiv">
                <div className="icondiv">
                  <FilterAltOutlined />
                </div>
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className={`btn ${
                      selectedCategory === category ? "active" : ""
                    }`}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </div>
                ))}
              </div>
              <div className="dots">
                <MoreHoriz />
              </div>
            </div>
            {schedule.map((sch, index) => {
              if (
                selectedCategory === "All" ||
                sch.category === selectedCategory
              ) {
                return (
                  <div className="body" key={index}>
                    <input type="checkbox" />
                    <div className="category">
                      <div className="cbtn">{sch.category.charAt(0)}</div>
                    </div>
                    <div className="date">{sch.date}</div>
                    <div className="time">{sch.time}</div>
                    <div className="name">{sch.name}</div>
                    <div className="tag">
                      <div className="tagbtn">{sch.tag}</div>
                    </div>
                    <div className="change">{sch.name}</div>
                    <div className="btn">
                      <button>View</button>
                    </div>
                  </div>
                );
              }
              return null; // If the category doesn't match, render nothing
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

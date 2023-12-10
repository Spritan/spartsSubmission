import { useState } from "react";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";

import "./dropdown.scss";

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const options = [
    "Last 30 Days",
    "Last 3 months",
    "Last 6 months",
    "Last 1 year",
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <div className="Dropdown">
      <div
        className={`dropdown-header ${dropdownOpen ? "open" : ""}`}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {selectedOption ? selectedOption : "Last 30 Days"}
        <div className="custom-down-icon">
          <KeyboardArrowDownOutlined />
        </div>
      </div>
      {dropdownOpen && (
        <div className="options">
          {options.map((option) => (
            <div
              key={option}
              className="option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

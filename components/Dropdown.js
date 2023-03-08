import React from "react";
import dropdownStyles from "../styles/Dropdown.module.css";
import { v4 as uuidv4 } from "uuid";

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label className={dropdownStyles.label}>
      {label}

      <div className={dropdownStyles.dropdown}>
        <select
          className={dropdownStyles.select}
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={uuidv4()} value={option.value}>
              <p>{option.label}</p>
            </option>
          ))}
        </select>
      </div>
    </label>
  );
};

export default Dropdown;

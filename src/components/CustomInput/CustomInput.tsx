import React from 'react';
import './CustomInput.css';
import { ReactComponent as SearchIcon } from "../../assets/icons/icon-search.svg";

interface Props {
  placeholder: string;
  showButton: boolean;
}

const CustomInput: React.FC<Props> = ({ placeholder, showButton }) => {
  return (
    <div className="input-wrapper">
      <input className="input" placeholder={placeholder} />
      {showButton && (
        <button className="search-button">
          <SearchIcon />
        </button>
      )}
    </div>
  );
};

export default CustomInput;
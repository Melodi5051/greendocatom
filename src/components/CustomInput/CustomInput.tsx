import React from 'react';
import './CustomInput.css';
import SearchIcon from "../../assets/icons/icon-search.svg"
import { appStore } from '../../store/store';

interface Props {
  placeholder: string;
  showButton: boolean;
}

const CustomInput: React.FC<Props> = ({ placeholder, showButton }) => {
  return (
    <div className="input-wrapper">
      <input className="input" placeholder={placeholder} onChange={(event) => appStore.setSubstring(event.target.value)} />
      {showButton && (
        <button className="search-button">
          <img src={SearchIcon} alt="" />
        </button>
      )}
    </div>
  )
};

export default CustomInput;
import React from 'react';
import './CustomInput.css';
import SearchIcon from "../../assets/icons/icon-search.svg"
import { appStore } from '../../store/store';
import { observer } from "mobx-react-lite"

interface Props {
  placeholder: string
  showButton: boolean
}

const CustomInput: React.FC<Props> = ({ placeholder, showButton }) => {
  const hadnleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (appStore) {
      appStore.setSubstring(event.target.value)
    }
  }
  return (
    <div className="input-wrapper">
      <input
        className="input"
        placeholder={placeholder}
        value={appStore ? appStore.searchSubstring : ""}
        onChange={hadnleChange}
      />
      {showButton && (
        <button className="search-button">
          <img src={SearchIcon} alt="" />
        </button>
      )}
    </div>
  )
}

export default observer(CustomInput)
import React from "react";
import './popup.scss'

const Languageoption = ({handleChangeLanguage}) => {
  return (
    <div>
      <select className="popup" onChange={handleChangeLanguage}>
        <option value={"en"}>English</option>
        <option value={"sr"}>Serbian</option>
      </select>
    </div>
  );
};

export default Languageoption;

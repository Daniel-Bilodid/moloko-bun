import React from "react";
import "./information.scss";
import avatar from "../../assets/avatar.jpg";

export const Information = () => {
  return (
    <div className="information">
      <img className="information__avatar" src={avatar} alt="moloko_avatar" />
      <p className="information__name">Moloko</p>
      <p className="information__social-name">@moloko_bun</p>
    </div>
  );
};

import React from "react";
import "./styles.css";
import get_socials_data from "./socials";

function SocialLink({ name, Icon, link, color }) {
  return (
    <a
      className="social__link padding-horiz--sm padding-vert--md"
      style={{ backgroundColor: color }}
      href={link}
      target="_blank"
    >
      <Icon className="social__icon" />
      <div className="social__title">{name}</div>
    </a>
  );
}

function Social() {
  const socials_list = get_socials_data();

  return (
    <div className="social">
      {socials_list &&
        socials_list.map((props, idx) => <SocialLink key={idx} {...props} />)}
    </div>
  );
}

export default Social;

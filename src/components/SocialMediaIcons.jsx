import React from "react";

import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import xing from "../assets/xing.png"
import behance from "../assets/behance.png"
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/nguyet-ha-phung-666a86262/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="linkedin-link" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.xing.com/profile/NguyetHa_Phung062555"
        target="_blank"
        rel="noreferrer"
      >
        <img src={xing} alt="xing-link" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/nguyetha79"
        target="_blank"
        rel="noreferrer"
      >
        <img src={github} alt="git-link" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.behance.net/nguyethaphung"
        target="_blank"
        rel="noreferrer"
      >
        <img src={behance} alt="behance-link" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;

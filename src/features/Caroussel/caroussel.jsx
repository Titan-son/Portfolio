import React, { useEffect, useState } from "react";
import "./caroussel.sass";
import Lhtml from "../../assets/images/html.svg";
import Lcss from "../../assets/images/css.svg";
import Ljs from "../../assets/images/js.svg";
import Lreact from "../../assets/images/reactjs.svg";
import Lpython from "../../assets/images/python.svg";
import Lsql from "../../assets/images/sql.svg";
import Lnode from "../../assets/images/node-js.svg";
import Lnext from "../../assets/images/next-js.svg";
import Lgit from "../../assets/images/git.svg";
import Lghub from "../../assets/images/github.svg";
import Wghub from "../../assets/images/white-hub.svg";

const Caroussel = ({ theme }) => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    // Liste des logos avec le logo GitHub en fonction du thème
    const logos = [
      { src: Lhtml, className: "", alt: "HTML Logo" },
      { src: Lcss, className: "", alt: "CSS Logo" },
      { src: Ljs, className: "", alt: "JavaScript Logo" },
      { src: Lreact, className: "", alt: "React Logo" },
      { src: Lpython, className: "", alt: "Python Logo" },
      { src: Lsql, className: "", alt: "SQL Logo" },
      { src: Lnode, className: "", alt: "Node.js Logo" },
      { src: Lnext, className: "", alt: "Next.js Logo" },
      { src: Lgit, className: "", alt: "Git Logo" },
      { src: theme === "dark" ? Wghub : Lghub, className: "ghub-logo", alt: "GitHub Logo" }
    ];

    setLogos(logos);
  }, [theme]);

  const renderLogos = () => (
    logos.map((logo, index) => (
      <img src={logo.src} alt={logo.alt} key={index} className={logo.className} />
    ))
  );

  return (
    <div className="logo-container">
      <div className="logo-slide">
        {renderLogos()}
      </div>
      <div className="logo-slide">
        {renderLogos()}
      </div>
    </div>
  );
};

export default Caroussel;

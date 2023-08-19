import React from "react";
import "./TopBar.css";
import Logo from "../../../public/assets/Logo.svg";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="wrapper-topbar">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="logo do site" />
          </a>
        </div>
        <div className="menu">
          <nav>
            <ul>
              <li>
                <a href="#">Premium</a>
              </li>
              <li>
                <a href="#">Suporte</a>
              </li>
              <li>
                <a href="#">Baixar</a>
              </li>
              <li className="separator"></li>
              <li>
                <a href="#">Inscrever-se</a>
              </li>
              <li>
                <a href="#">Entrar</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

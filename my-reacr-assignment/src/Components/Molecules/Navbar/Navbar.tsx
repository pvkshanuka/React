import React, { ReactNode } from "react";
import { Navbaritem } from "../Navbaritem/Navbaritem";
import "./Navbar.scss";

export interface NavbarProps {
  children: React.ReactElement | ReactNode | JSX.Element;
}

export const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <div className="topnav">
        <Navbaritem refer="" text="Overview"/>
        <Navbaritem refer="" text="Organizations"/>
        <Navbaritem refer="" text="Users"/>
      <div className="topnav-right">
        <p>Leo Blair</p>
        <img
          src="https://www.adequatetravel.com/Social/assets/images/noti3.png"
          alt="img"
        />
      </div>
    </div>
  );
};

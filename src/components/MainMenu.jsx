import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./MainMenu.css";
import { AuthContext } from "../context/AuthContext";

const NavItems = [
  { title: "Home", linkTo: "/" },
  { title: "Login", linkTo: "/login" },
  { title: "Register", linkTo: "/register" },
  { title: "About", linkTo: "/about" },
];

const ProtectedNavItems =[
  { title: "Locations", linkTo: "/protected/locations" },
  { title: "Service", linkTo: "/protected/service" },
  { title: "Mission", linkTo: "/protected/mission" },
  { title: "Workout", linkTo: "/protected/workout" },
  { title: "News", linkTo: "/protected/news" },
  { title: "Excercises", linkTo: "/protected/excercises" },
]

const MobileMenu = ({onClick ,user}) => {
  return (
    <div className={"mobile-menu"}>
      {NavItems.map((item) => (
        <Link key={item.title} to={item.linkTo} onClick={onClick}>
          {item.title}
        </Link>
      ))}
       {user && ProtectedNavItems.map((item) => (
        <Link key={item.title} to={item.linkTo} onClick={onClick}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export const MainMenu = () => {
  const {user} = useContext(AuthContext);
  const [isShown, setIsShown] = useState(false);

  const toggleMobileMenu = () => {
    setIsShown(!isShown);
  };
  return (
    <nav className="topnav">
      <div className="logo">
        Speed<h1>fit</h1>
      </div>
      <ul className="links">
        {NavItems.map((item) => (
          <li key={item.title}>
            <Link to={item.linkTo}>{item.title}</Link>
          </li>
        ))}
        {
          user && 
          ProtectedNavItems.map((item) => (
            <li key={item.title}>
              <Link to={item.linkTo}>{item.title}</Link>
            </li>
          ))
        }
      </ul>

      <button className="show-mobile-menu-button" onClick={toggleMobileMenu}>
      &#8801;
      </button>

      {isShown && <MobileMenu onClick={toggleMobileMenu} user={user}/>}
      {isShown && (
        <button className="close-mobile-menu-button" onClick={toggleMobileMenu}>
          &times;
        </button>
      )}
    </nav>
  );
};

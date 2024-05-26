import React from "react";

const initNav = [
  { id: 1, name: "Home" },
  { id: 2, name: "About" },
  { id: 3, name: "Explore" },
  { id: 4, name: "Gallery" },
  { id: 5, name: "Contact" },
];

const Header = () => {
  return (
    <header>
      <a>Travel</a>
      <div>
        <div>
          {initNav.map((item) => {
            return <a key={item.id}>{item.name}</a>;
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;

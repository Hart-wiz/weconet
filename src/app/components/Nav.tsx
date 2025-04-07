import React from "react";

const Nav = () => {
  return (
    <div className="fixed z-30 w-screen flex justify-between px-30 py-7 bg-black/45 text-white max-md:px-3 ">
      <h2 className="font-extrabold ">WECONETt</h2>
      <ul className=" flex gap-9 max-md:hidden">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

import React from "react";

const Header = () => {
  return (
    <div className="relative px-30  text-white  h-screen w-full flex justify-center items-center bg-cover bg-[url('https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?q=80&w=1386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] ">
      <div className="h-screen bg-black opacity-70 w-full absolute"></div>
      <div className="flex z-30 gap-4  items-center max-md:flex-col">
        <h1 className="font-extrabold text-7xl max-md:text-3xl ">
          WECONETDATA TECHNOLOGIES
        </h1>
        <p className="w-[90%] max-md:text-md max-md:text-center">
          <b>
            Powering Business Growth We build custom apps, websites, and mobile
            solutions that help your business scale faster and work smarter.
          </b>
          <br />
          <i className="mt-5"> Let’s create something great together.</i>
        </p>
      </div>
    </div>
  );
};

export default Header;

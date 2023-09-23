import React from "react";
import homeImg from "../assets/home-line.svg";
import settingImg from "../assets/settings-02.svg";
import shoppingBagImg from "../assets/shopping-bag-03.svg";
import heartImg from "../assets/activity-heart.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white fixed min-w-[380px]  max-w-[400px] bottom-0 h-20 grid place-items-center border-gray-400 border-t-[1px]">
      <div className="mx-auto flex w-[80%] justify-between">
        <div className=" grid grid-rows-2 justify-items-center">
          <img src={homeImg} alt="home link" id="home link" />
          <label className="text-xs" htmlFor="home link">
            Home
          </label>
        </div>
        <div className="grid grid-rows-2 justify-items-center">
          <img src={heartImg} alt="heart link" id="heart link" />
          <label className="text-xs" htmlFor="heart link">
            Saved
          </label>
        </div>
        <Link to="/cart" className="grid grid-rows-2 justify-items-center">
          <img src={shoppingBagImg} alt="shopping bag" id="shopping bag" />
          <label className="text-xs" htmlFor="shopping bag">
            cart
          </label>
        </Link>
        <div className="grid grid-rows-2 justify-items-center">
          <img src={settingImg} alt="settings link" id="settings link" />
          <label className="text-xs" htmlFor="settings link">
            Settings
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

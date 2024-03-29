// import React from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../style.css";
import {
  getAllItems,
  getThemeState,
  setFilteredItems,
  setThemeState,
  getCartCounterState,
} from "../features/itemSlice";
import useLocalStorage from "../hooks/useLocalStorage";
import shoppingCart from "../icons/basket2.png";

export default function Navbar() {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");
  const items = useSelector(getAllItems);
  const cartCounter = useSelector(getCartCounterState);

  const handleSearch = (e) => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(term.toLowerCase())
    );
    console.log(filteredItems);
    if (filteredItems.length === 0 || term == "") {
      alert("No results found");
    }
    dispatch(setFilteredItems(filteredItems));
    e.preventDefault();
    setTerm("");
  };

  const [theme, setTheme] = useLocalStorage("theme", "light");
  const theme_state = useSelector(getThemeState);

  const handleToggle = () => {
    console.log("toggled");
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    theme === "dark"
      ? dispatch(setThemeState(true))
      : dispatch(setThemeState(false));
  }, [theme]);

  console.log(theme);
  console.log(theme_state);

  return (
    <>
      {
        <header
          className={` body-font shadow-md ${
            theme !== "dark"
              ? "text-gray-600 bg-cyan-200 bg-opacity-50"
              : "text-white bg-slate-900 shadow-slate-800 drop-shadow-md"
          }`}
        >
          <div className="container mx-auto flex flex-wrap py-5 px-14 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <a href="/" className="ml-3 text-xl">
                <span className={`${theme !== "dark" ? "" : "text-slate-100"}`}>
                  Online
                </span>
                <span className="bg-pink-600 px-1 mx-1 rounded text-slate-100">
                  Store
                </span>
              </a>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <div className="relative">
                <img src={shoppingCart} alt="" />
                <div
                  className={`bg-pink-400 rounded-[50%] absolute px-1 -top-2 -right-2 border-2 text-xs text-white`}
                >
                  {localStorage.getItem("cartCount")}
                </div>
              </div>
              <form action="" className="relative" onSubmit={handleSearch}>
                <input
                  type="text"
                  className="bg-pink-400 rounded-lg h-[32px] w-[15rem] placeholder:text-slate-100 placeholder:text-sm px-3 mx-4"
                  placeholder="Search for products"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                />
                <IoSearch className="absolute right-6 items-center top-1/4" />
              </form>
              <label className={`switch ${theme === "dark" ? "dark" : ""}`}>
                <span className="sun">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="#ffd43b">
                      <circle r="5" cy="12" cx="12"></circle>
                      <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                    </g>
                  </svg>
                </span>
                <span className="moon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
                  </svg>
                </span>
                <input
                  type="checkbox"
                  className="input"
                  onClick={handleToggle}
                  checked={theme === "dark"}
                />
                <span
                  className={`slider ${theme === "dark" ? "translated" : ""}`}
                ></span>
              </label>
            </nav>
          </div>
          <div className="sidebar"></div>
        </header>
      }
    </>
  );
}

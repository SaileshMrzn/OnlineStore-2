// import React from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncItems } from "../features/itemSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    if (term.length === 0) {
      alert("Please enter a search term");
    } else {
      const searchVal = dispatch(fetchAsyncItems());
      setTerm(searchVal);
    }
  };
  return (
    <>
      <header className="text-gray-600 body-font bg-cyan-200 bg-opacity-40 shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <a href="/" className="ml-3 text-xl">
              <span>Online</span>
              <span className="bg-pink-600 px-1 mx-1 rounded text-slate-100">
                Store
              </span>
            </a>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {/* <Link className="mr-5 hover:text-pink-600" to="/">
              Home
            </Link> */}
            {/* <Link className="hover:text-pink-600" to="/search">
              Search
            </Link> */}
            <form action="" className="relative" onSubmit={handleSearch}>
              <input
                type="text"
                className="bg-pink-300 rounded h-[1.85rem] w-[15rem] placeholder:text-slate-100 placeholder:text-sm px-3"
                placeholder="Search for products"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              />
              <IoSearch className="absolute right-3 items-center top-1/4" />
            </form>
          </nav>
        </div>

        <div className="sidebar"></div>
      </header>
    </>
  );
}

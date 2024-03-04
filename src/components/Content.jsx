import React from "react";
import Items from "./Items";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAsyncItems, getThemeState } from "../features/itemSlice";

export default function Content() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncItems());
  }, []);

  const theme = useSelector(getThemeState);

  return (
    <>
      {theme == false ? (
        <div>
          <h2 className="text-gray-900 title-font text-center text-xl my-3 mt-6">
            Top Deals
          </h2>
          <div className="flex flex-wrap justify-center items-center mx-5">
            <Items />
          </div>
          <Footer />
        </div>
      ) : (
        <div className="bg-slate-900">
          <h2 className="text-white title-font text-center text-xl py-3 pt-6">
            Top Deals
          </h2>
          <div className="flex flex-wrap justify-center items-center px-5">
            <Items />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

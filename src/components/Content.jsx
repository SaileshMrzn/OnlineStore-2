import React from "react";
import Items from "./Items";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAsyncItems, fetchAsyncItemDetail } from "../features/itemSlice";

export default function Content() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncItems());
  }, []);

  return (
    <>
      <h2 className="text-gray-900 title-font text-center text-xl my-3 mt-6">
        Top Deals
      </h2>
      <div className="flex flex-wrap justify-center items-center mx-5">
        <Items />
      </div>
      <Footer />
    </>
  );
}

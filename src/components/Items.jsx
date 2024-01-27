import React from "react";
import { Link } from "react-router-dom";
import "../style.css";
import { useSelector } from "react-redux";
import { getAllItems } from "../features/itemSlice";

export default function Items() {
  const items = useSelector(getAllItems);
  console.log(items);

  if (!items) {
    return <p>Loading...</p>;
  }
  return (
    <>
      {items.map((item) => (
        <div className="xl:w-[20%] md:w-[30%] p-5">
          <div className="border-solid border-2 border-grey-100 p-6 rounded-lg">
            <Link to={`/item/${item.id}`} className="hover:text-pink-600">
              <div className="h-60 items-center justify-center flex">
                <img
                  className="h-[75%] rounded object-center mb-6 mx-auto"
                  src={item.image}
                  alt="content"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {item.category.charAt(0).toUpperCase() +
                    item.category.slice(1)}
                </h3>
                <h2 className="title-font text-lg font-medium">
                  {item.title.substring(0, 20)}...
                </h2>
                <p className="mt-1">${item.price}</p>
              </div>
            </Link>
          </div>
        </div>
      ))}
      hello
    </>
  );
}

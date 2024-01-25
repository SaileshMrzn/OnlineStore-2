/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../style.css";

export default function Items(props) {
  return (
    <>
      <div className="xl:w-1/4 md:w-1/2 p-5">
        <div className="border-solid border-2 border-grey-100 p-6 rounded-lg">
          <Link to={`/item/${props.id}`} className="hover:text-pink-600">
            <div className="h-60 items-center justify-center flex">
              <img
                className="h-[75%] rounded object-center mb-6 mx-auto"
                src={props.image}
                alt="content"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                {props.category.charAt(0).toUpperCase() +
                  props.category.slice(1)}
              </h3>
              <h2 className="title-font text-lg font-medium">
                {props.title.substring(0, 20)}...
              </h2>
              <p className="mt-1">${props.price}</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

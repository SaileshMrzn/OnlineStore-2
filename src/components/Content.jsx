import React from "react";
import axios from "axios";
import Items from "./Items";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAsyncItems } from "../features/itemSlice";

export default function Content() {
  // const query = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: async () => {
  //     const response = await axios.get("https://fakestoreapi.com/products");
  //     const data = await response.data;
  //     return data;
  //   },
  // });

  // if (query.isLoading)
  //   return (
  //     <h2 className="text-gray-900 title-font text-center text-xl my-3">
  //       Loading....
  //     </h2>
  //   );
  // if (query.isError)
  //   return (
  //     <h2 className="text-gray-900 title-font text-center text-xl my-3">
  //       Error loading data!!!
  //     </h2>
  //   );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncItems());
  }, []);

  return (
    <>
      <h2 className="text-gray-900 title-font text-center text-xl my-3 mt-6">
        Top Deals
      </h2>
      <div className="flex flex-wrap justify-center items-center">
        <Items />
        <Footer />
      </div>
    </>
  );
}

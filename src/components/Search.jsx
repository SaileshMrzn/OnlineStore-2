import { useEffect, useState } from "react";
import axios from "axios";
import Items from "./Items";
import "../style.css";

export default function Search() {
  const [search, setSearch] = useState("");
  const [lists, setLists] = useState([]);

  const getFilteredItems = (search, lists) => {
    if (!search) {
      return [];
    }
    return lists.filter((products) =>
      products.title.toLowerCase().includes(search.toLowerCase())
    );
  };

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products`);
        setLists(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItemDetails();
  }, []);

  const filteredItems = getFilteredItems(search, lists);

  return (
    <>
      <div className="flex justify-center my-3 mt-6">
        <form action="">
          <input
            className="drop-shadow-md"
            type="text"
            name="search"
            id="searchProducts"
            placeholder="Search for Products"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>

      <div className="flex flex-wrap justify-center mx-auto container">
        {filteredItems.map((val) => (
          <Items
            id={val.id}
            key={val.id}
            title={val.title}
            image={val.image}
            description={val.description}
            price={val.price}
            rate={val.rating.rate}
            count={val.rating.count}
            category={val.category}
          />
        ))}
      </div>
    </>
  );
}

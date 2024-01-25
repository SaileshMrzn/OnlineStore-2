import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Items from "./Items";
import Footer from "./Footer";

export default function Content() {
  const query = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = await response.data;
      return data;
    },
  });

  if (query.isLoading)
    return (
      <h2 className="text-gray-900 title-font text-center text-xl my-3">
        Loading....
      </h2>
    );
  if (query.isError)
    return (
      <h2 className="text-gray-900 title-font text-center text-xl my-3">
        Error loading data!!!
      </h2>
    );

  return (
    <>
      <h2 className="text-gray-900 title-font text-center text-xl my-3 mt-6">
        Top Deals
      </h2>
      <div className="flex flex-wrap justify-center mx-auto container">
        {query.data.map((item) => (
          <Items
            id={item.id}
            key={item.id}
            title={item.title}
            image={item.image}
            description={item.description}
            price={item.price}
            rate={item.rating.rate}
            count={item.rating.count}
            category={item.category}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

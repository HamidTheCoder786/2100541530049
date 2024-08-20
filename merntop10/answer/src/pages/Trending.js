import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";

const Trending = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // API FETCH LOGIC
    const url =
      "http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=100000";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // if (data.length === 0) {
  //   return <h1 className="text-4xl h-[90vh] font-semibold">Loading...</h1>;
  // } else {
    return (
      <div>
        <Cards data={data} />
      </div>
    );
  }
// };

export default Trending;

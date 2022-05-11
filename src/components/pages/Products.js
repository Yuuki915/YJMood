import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      axios
        .get(`https://fakestoreapi.com/products`)
        .then((res) => {
          setData(res.data);
          setFilter(res.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading.....</>;
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div>
          <button onClick={() => setFilter(data)}>All</button>
          <button onClick={() => filterProduct("men's clothing")}>Men</button>
          <button onClick={() => filterProduct("wemen's clothing")}>
            Wemen
          </button>
          <button onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button onClick={() => filterProduct("electronic")}>
            Electronic
          </button>
        </div>
        {data.map((product) => (
          <div>
            <h4>{product.title}</h4>
            <h4>{product.price}</h4>
          </div>
        ))}
      </>
    );
  };

  return (
    <div>
      <h1>GET</h1>
      {loading ? <Loading /> : <ShowProducts />}
    </div>
  );
}

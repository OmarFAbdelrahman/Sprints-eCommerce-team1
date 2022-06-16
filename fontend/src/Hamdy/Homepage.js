import React from "react";
import Catalog from "./Catalog";
import SearchBar from "./SearchBar";
import Sort from "./Sort";
import "bulma/css/bulma.min.css";
import Loading from "./LoadingScreen";
import { useParams } from "react-router-dom";

function Nav() {
  const [products, setProducts] = React.useState([]);
  const [filter, setFilter] = React.useState([]);
  const [text, setText] = React.useState("");
  const [loading, setLoading] = React.useState("active");

  const params = useParams();

  React.useEffect(() => {
    resetProducts();
  }, [params]);

  const resetProducts = () => {
    if (params.categoryId) {
      console.log(params.categoryId);
      fetch(`http://localhost:5000/api/v1/products`)
        .then((res) => res.json())
        .then((json) => {
          const productList = json.products.filter(
            (prod) => prod.category === params.categoryId
          );
          setProducts(productList);
          setFilter(productList);
        })
        .finally(() => setLoading(""));
    } else if (params.searchQuery) {
      fetch("http://localhost:5000/api/v1/products")
        .then((res) => res.json())
        .then((json) => {
          const productList = json.products.filter((prod) =>
            prod.name.toLowerCase().includes(params.searchQuery.toLowerCase())
          );
          setProducts(productList);
          setFilter(productList);
        })
        .finally(() => setLoading(""));
    } else {
      fetch("http://localhost:5000/api/v1/products")
        .then((res) => res.json())
        .then((json) => {
          setProducts(json.products);
          setFilter(json.products);
        })
        .finally(() => setLoading(""));
    }
  };

  const searchProducts = (keyword) => {
    const filtered = products.filter((prod) =>
      prod.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilter(filtered);
  };

  const sortProducts = (attr, type) => {
    const sorted =
      type === "desc"
        ? [...filter].sort((a, b) => b[attr] - a[attr])
        : [...filter].sort((a, b) => a[attr] - b[attr]);
    setFilter(sorted);
  };

  return (
    <>
      <Loading state={loading} />
      <Sort sortProducts={sortProducts} />
      <Catalog products={filter} />
    </>
  );
}

export default Nav;

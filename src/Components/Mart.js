import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Mart = () => {
  const [data, setData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [cartData, setCartData] = useState(() => {
    const storedCartData = localStorage.getItem("cart");
    return storedCartData ? JSON.parse(storedCartData) : [];
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products/");
        const user = await response.json();
        console.log(Object.values(user.products));
        setData(Object.values(user.products));
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartData));
  }, [cartData]);

  const fData = () => {
    const filteredData = inputSearch
      ? data.filter((item) =>
          item.title.toLowerCase().includes(inputSearch.toLowerCase())
        )
      : data;

    return filteredData;
  };

  const addedDataToCart = (item) => {
    let cart = {
      name: item.title,
      price: item.price,
    };
    setCartData((prevCartData) => [...prevCartData, cart]);
  };

  return (
    <>
      <nav className="NavContainer">
        <div className="NavItem">ShopArt...</div>
        <div>
          <Link to="/cart" className="NavItem1 decoration">
            Cart
          </Link>
          <Link to="/" className="NavItem1 decoration">
            Logout
          </Link>
        </div>
      </nav>
      <div className="data">
        <div className="heading">
          <div className="search">
            <input
              type="text"
              onChange={(e) => setInputSearch(e.target.value)}
              placeholder="Search here"
              className="inputSearch search"
            />
          </div>
        </div>
        <div className="itemMart">
          {fData().map((item) => (
            <div key={item.id} className="one">
              <img src={item.images[0]} alt="Product Imge" />
              <div className="two">
                <h4 className="title">{item.title}</h4>
                <p>Price: {item.price}</p>
                <footer>
                  <button className="btnMart" onClick={() => addedDataToCart(item)}>
                    Add to Cart
                  </button>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Mart;


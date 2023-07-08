import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "../Images/undraw_empty_cart_co35.svg";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const [value, setValue] = useState([]);
  const [sum, setSum] = useState(0);
 const navigate = useNavigate();
  useEffect(() => {
    const getData = localStorage.getItem("cart");
    const cartData = JSON.parse(getData);
    setValue(cartData || []);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = value.filter((_, i) => i !== index);
    setValue(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const calculateTotal = () => {
      const total = value.reduce((acc, item) => acc + item.price, 0);
      setSum(total);
    };

    calculateTotal();
  }, [value]);

const clearData=(event)=>{
    event.preventDefault();
    localStorage.clear("cart");
    alert("Thenkyou for Shopping")
    setTimeout(()=>{
        navigate("/mart")
    },1000)
}
  return (
    <div>
      <nav className="NavContainer">
        <div className="NavItem">ShopArt...</div>
        <Link to="/mart" className="NavItem1 decoration">
          Home
        </Link>
      </nav>
      <div className="cartflex cartContainer">
        {value.length ? (
          <div className="itemCart">
            {value.map((item, index) => (
              <div className="itemCart2" key={index}>
                <div>

                  <div>{item.name}</div>
                  <div>Rs. {item.price}</div>
                  <button className="btnMart" onClick={() => removeFromCart(index)}>
                    Remove from Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="cartContainer">
            <h2>
              Your <span className="blue">cart</span> is <div>empty...</div>
            </h2>
            <img className="cartImage" src={image} alt="404" />
          </div>
        )}
        {value.length > 0 && (
          <div>
            <h1>Checklist</h1>
            <div>
              <span className="blue" style={{ fontWeight: "bolder" }}>
                Total </span>{" "}
              Rs   {sum}
            </div>
            <button className="pay" onClick={clearData}>Pay Now</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

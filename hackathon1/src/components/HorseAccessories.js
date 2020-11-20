import React, { useState } from "react";
import "../style/Cards.css";
import { Link } from "react-router-dom";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

const HorseAccessories = () => {
  const [products] = useState([
    {
      name: "Shamus",
      image: "../images/horse1.png",
      cost: "450",
      etat: "./images/denier.png",
    },
    {
      name: "Candy",
      image: "../images/horse2.png",
      cost: "840",
      etat: "./images/denier.png",
    },
    {
      name: "Milan",
      image: "../images/horse3.png",
      cost: "956",
      etat: "./images/denier.png",
    },
    {
      name: "Geno",
      image: "../images/horse4.png",
      cost: "740",
      etat: "./images/denier.png",
    },
    {
      name: "Moonbeam",
      image: "../images/horse5.png",
      cost: "586",
      etat: "./images/denier.png",
    },
    {
      name: "Galaxy",
      image: "../images/horse6.png",
      cost: "941",
      etat: "./images/denier.png",
    },
    {
      name: "Charming",
      image: "../images/horse7.png",
      cost: "951",
      etat: "./images/denier.png",
    },
    {
      name: "Buck",
      image: "../images/horse8.png",
      cost: "456",
      etat: "./images/denier.png",
    },
  ]);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const renderProducts = () => (
    <>
      {products.map((product, index) => (
        <div className="product" key={index}>
          <h3>{product.name}</h3>
          <img
            style={{ width: "100px", height: "100px" }}
            src={product.image}
            alt={product.name}
          />
          <h4>{product.cost}</h4>
          <img
            style={{ width: "30px", height: "30px" }}
            src={product.etat}
            alt={product.name}
          />
          <button className="btn-card" onClick={() => addToCart(product)}>
            Add to basket
          </button>
        </div>
      ))}
    </>
  );

  const renderCart = () => (
    <div className="renderCartContainer">
      <>
        <Link to="/order">
          <button className="btn btn-default">Achat</button>
        </Link>
        <div className="products">
          {cart.map((product, index) => (
            <div className="product" key={index}>
              <h3>{product.name}</h3>
              <img
                style={{ width: "100px", height: "100px" }}
                src={product.image}
                alt={product.name}
              />
              <h4>{product.cost}</h4>
              <img
                style={{ width: "30px", height: "30px" }}
                src={product.etat}
                alt={product.name}
              />
              <button
                className="btn-card"
                onClick={() => removeFromCart(product)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </>
    </div>
  );

  return (
    <div>
      <header>
        <div className="container-header">
          <div className="panier">
            <img
              style={{ width: "50px", height: "50px" }}
              className="panier-img"
              src="../images/panier2.png"
              alt="panier"
              onClick={() => navigateTo(PAGE_CART)}
            />
            ({cart.length})
          </div>
        </div>
      </header>

      <div className="products">
        {page === PAGE_PRODUCTS && renderProducts()}
        {page === PAGE_CART && renderCart()}
      </div>
    </div>
  );
};

export default HorseAccessories;

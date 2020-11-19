import React, { useState } from 'react';
import '../style/Cards.css'

const PAGE_PRODUCTS = 'products'
const PAGE_CART = 'cart'

const Weapons = () => {
const [products] = useState([
    {name:'epic sword', image:'https://www.darksword-armory.com/wp-content/uploads/2018/07/the-vindaaris-sword-fantasy-medieval-weapon-1328-darksword-armory-3-600x400.jpg', cost:'4.99€', etat:'new'},
    {name:' old Axe', image:'https://images-na.ssl-images-amazon.com/images/I/711JcVqirDL._SL1500_.jpg', cost:'8.99€', etat:'new'},
    {name:'prout', image:'https://images-na.ssl-images-amazon.com/images/I/711JcVqirDL._SL1500_.jpg', cost:'8.99€', etat:'new'},
    {name:'spartan sword', image:'https://images-na.ssl-images-amazon.com/images/I/711JcVqirDL._SL1500_.jpg', cost:'8.99€', etat:'new'},
    {name:'bow', image:'https://images-na.ssl-images-amazon.com/images/I/711JcVqirDL._SL1500_.jpg', cost:'8.99€', etat:'new'},
    {name:'germanic spear', image:'https://images-na.ssl-images-amazon.com/images/I/711JcVqirDL._SL1500_.jpg', cost:'8.99€', etat:'new'},
    {name:'bow', image:'https://images-na.ssl-images-amazon.com/images/I/711JcVqirDL._SL1500_.jpg', cost:'8.99€', etat:'new'},
    {name:'germanic spear', image:'https://images-na.ssl-images-amazon.com/images/I/711JcVqirDL._SL1500_.jpg', cost:'8.99€', etat:'new'},
])
const [cart,setCart] = useState([])
const [page,setPage] = useState(PAGE_PRODUCTS)

const addToCart = (product) => {
    setCart([...cart, {...product}])
}

const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove))
}

const navigateTo = (nextPage) => {
    setPage(nextPage)
}

const renderProducts = () => ( <>
    {products.map((product, index) => (
        <div className="product" key={index}>
            <h3>{product.name}</h3>
            <img style={{width:"100px", height:"100px"}} src={product.image} alt={product.name} />
            <h4>{product.cost}</h4>
            <h5>{product.etat}</h5>
            <button className="btn-card"  onClick={() => addToCart(product)}>Ajoutez au panier</button>
        </div>
    ))}
    </>
    )

const renderCart = () => (
    <>
    {cart.map((product, index) => (
        <div className="product" key={index}>
            <h3>{product.name}</h3>
            <img  style={{width:"100px", height:"100px"}} src={product.image} alt={product.name} />
            <h4>{product.cost}</h4>
            <h5>{product.etat}</h5>
            <button className="btn-card"  onClick={() => removeFromCart(product)}>Remove</button>
        </div>
        
    ))}
    </>
)

    return(
        <div>
            <header>
                <div className="container-header">
                        <h1>Dev Tools</h1>
                    <div className="panier">
                        <img className="panier-img" src="../images/panier.png" alt="panier"
                        onClick={() => navigateTo(PAGE_CART)} />
                        ({cart.length})
                    </div>
                </div>
            </header>
            <div className="products">
                {page === PAGE_PRODUCTS && renderProducts()}
                {page === PAGE_CART && renderCart()}
            </div>
        </div>
    )
}

export default Weapons;
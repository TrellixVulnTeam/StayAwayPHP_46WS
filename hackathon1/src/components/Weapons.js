import React, { useState } from 'react';
import '../style/Cards.css'

const PAGE_PRODUCTS = 'products'
const PAGE_CART = 'cart'

const Weapons = () => {
const [products] = useState([
    {name:'epic sword', image:'../images/weapon1.png', cost:'4.99€', etat:'new'},
    {name:' old sword', image:'../images/weapon2.png', cost:'8.99€', etat:'new'},
    {name:'Axe', image:'../images/weapon3.png', cost:'8.99€', etat:'new'},
    {name:'war hammer', image:'../images/weapon4.png', cost:'8.99€', etat:'new'},
    {name:'Classic bow', image:'../images/weapon5.png', cost:'8.99€', etat:'new'},
    {name:'Dagger', image:'../images/weapon6.png', cost:'8.99€', etat:'new'},
    {name:'bow', image:'../images/weapon7.png', etat:'new'},
    {name:'germanic spear', image:'../images/weapon8.png', cost:'8.99€', etat:'new'},
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
                        <img style={{width:"50px", height:"50px"}} className="panier-img" src="../images/panier2.png" alt="panier"
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
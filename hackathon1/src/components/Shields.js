import React, { useState } from 'react';
import '../style/Cards.css'

const PAGE_PRODUCTS = 'products'
const PAGE_CART = 'cart'

const Shields = () => {
const [products] = useState([
    {name:'Kingdoms Heart', image:'../images/bouclier1.png', cost:'20€', etat:'new'},
    {name:'Honors Will', image:'../images/bouclier2.png', cost:'350', etat:'new'},
    {name:'Eulogy', image:'../images/bouclier3.png', cost:'8.99€', etat:'new'},
    {name:'Deserted Shield', image:'../images/bouclier4.png', cost:'8.99€', etat:'new'},
    {name:'Prides Wall', image:'../images/bouclier5.png', cost:'8.99€', etat:'new'},
    {name:'Recruits Maple Defender', image:'../images/bouclier6.png', cost:'8.99€', etat:'new'},
    {name:'Defenders Obsidian Buckler', image:'../images/bouclier7.png', cost:'8.99€', etat:'new'},
    {name:'Reign Breaker Memory of the Night Sky', image:'../images/bouclier8.png', cost:'8.99€', etat:'new'},
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

export default Shields;
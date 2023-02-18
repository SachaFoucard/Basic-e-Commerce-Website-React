
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../Context/StoreContext'

export default function Item({ id, name, price, imageURL, inCart }) {

    const { AddToCart, RemoveFromCard } = useContext(StoreContext)

    const Add = (id, name, price, imageURL) => {
        AddToCart(id, name, price, imageURL)
    }
    const rem = (id, price) => {
        RemoveFromCard(id, price)
    }

    return (
        <>
            <div className='item Cart-Items'>
                <Link to={`/product/${id}`}><img className='image-box' width={250} src={imageURL} /></Link>
                <p className='title' style={{ fontSize: 20 }}>{name}</p>
                <p className='price' style={{ fontSize: 20 }}>{price}</p>
                {
                    (!inCart) ?
                        <button className='btn' onClick={() => Add(id, name, price, imageURL)}>add to cart</button>
                        : <button className='btn' onClick={() => rem(id, price)}>remove</button>
                }
            </div>
        </>
    )
}

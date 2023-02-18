import React, { useEffect } from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { StoreContext } from '../Context/StoreContext';


export default function Product({ ido, name, price, imageURL }) {

    const [item, setItem] = useState([]);

    let { id } = useParams();

    const { items, jean, veste, AddToCart,SetCartItems,setCount,setTotalPrice } = useContext(StoreContext);

    let productshoes = items.find((item) => item.id == id);
    let productjean = jean.find((item) => item.id == id);
    let productveste = veste.find((item) => item.id == id);

    const Find = () => {
        if (productshoes != undefined) {
            setItem(productshoes)
        }
        if (productjean != undefined) {
            setItem(productjean)
        }
        if (productveste != undefined) {
            setItem(productveste)
        }
    }
    const plus = (id, name, price, imageURL) => {
        AddToCart(id, name, price, imageURL)
        console.log(id);
        console.log(name);
        console.log(price);
        console.log(imageURL);
    }

    useEffect(() => {
        Find()
    }, [])

    return (
        <>
            <div className='grid gridos'>
                <div className='item Cart-Items'>
                    <img className='image-box' width={450} src={item.imageURL} />
                    <button className='btn-add' style={{backgroundColor:"Orange"}} onClick={() => plus(item.id,item.name,item.price,item.imageURL)}>Added to cart</button>

                </div>
                <div className='des'>
                    <h2 className='txt'>OVERVIEW :</h2>
                    <p className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam delectus distinctio eius officia ad, quae ducimus esse, quibusdam sapiente quaerat unde animi recusandae? Facere quidem impedit quasi consectetur expedita culpa.</p>
                    <br />
                    <br />
                    <br />
                    <p className='title' style={{ fontSize: 50 }}>{item.name}</p>
                    <p className='price' style={{ fontSize: 30 }}>{item.price}$</p>
                </div>
            </div>
        </>
    )
}

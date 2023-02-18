import React from 'react'
import { useContext } from 'react';
import Item from '../Components/Item';
import { StoreContext } from '../Context/StoreContext';

export default function Shoes() {

    const { items } = useContext(StoreContext)

    return (
        <>
            <h1 className='h-o'>Shoes</h1>
            <div className='grid'>
                {
                    items.map((item, i) => <Item key={i} {...item} />)
                }
            </div>
        </>

    )
}

import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import Item from '../Components/Item';

export default function Veste() {

    const { veste } = useContext(StoreContext);

    return (
        <>
          <h1 className='h-o'>Veste</h1>
            <div className='grid'>
                {
                    veste.map((item, i) => <Item key={i} {...item} />)
                }
            </div>

        </>
    )
}

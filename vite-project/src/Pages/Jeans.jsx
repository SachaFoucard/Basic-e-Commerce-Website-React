import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import Item from '../Components/Item';

export default function Jeans() {

    const { jean } = useContext(StoreContext);

    return (
        <>
         <h1 className='h-o'>Pants</h1>
            <div className='grid'>
                {
                    jean.map((item, i) => <Item className="item" key={i} {...item} />)
                }
            </div>

        </>
    )
}

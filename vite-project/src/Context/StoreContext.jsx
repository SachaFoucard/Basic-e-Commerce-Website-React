import { createContext } from 'react'
import { useState, useEffect } from 'react'

export const StoreContext = createContext()

export default function StoreContextProvider({ children }) {

    const [items, SetItems] = useState([]);
    const [count, setCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    /* Creating a state variable called cartItems and a function called SetCartItems. */
    const [cartItems, SetCartItems] = useState([])
    const [jean, setJean] = useState([]);
    const [veste, setVeste] = useState([]);


    const AddToCart = (id, name, price, imageURL) => {
        if (cartItems.find((item) => item.id == id) == undefined) {
            let item = {
                id,
                name,
                price,
                imageURL
            }
            SetCartItems((prev) => [...prev, item])
            setCount(count + 1)
            setTotalPrice(totalPrice + item.price)
        }
        else {
            alert(`${name} already added`)
        }
    }

    const RemoveFromCard = (id, price) => {
        { setTotalPrice(0) }
        setTotalPrice(totalPrice - price)
        SetCartItems(cartItems.filter((item) => item.id != id));
        setCount(count - 1)
    }

    /**
     * It loads the items from the items.json file and sets the state of the items.
     */
    const LoadItems = async () => {
        let res = await fetch('./data/clothes.json');
        let data = await res.json();
        SetItems(data);
    }
    const LoadShirt = async () => {
        let res = await fetch('./data/Shirt.json');
        let data = await res.json();
        setJean(data);
    }
    const LoadVeste = async () => {
        let res = await fetch('./data/veste.json');
        let data = await res.json();
        setVeste(data);
    }

    /* A hook that is called when the component is mounted. */
    useEffect(() => {
        LoadItems();
        LoadShirt();
        LoadVeste();
    }, []);

    const value = {
        items,
        cartItems,
        SetCartItems,
        count,
        setCount,
        totalPrice,
        setTotalPrice,
        AddToCart,
        RemoveFromCard,
        jean,
        veste
    }

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    )
}

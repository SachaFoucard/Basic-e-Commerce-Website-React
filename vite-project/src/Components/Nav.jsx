import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../Context/StoreContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'


export default function Nav() {
  const { count } = useContext(StoreContext);

  return (
    <>
      <header>

      </header>
      <nav>
        <ul>
          <li><Link to="/">About us</Link></li>
          <li><Link to="/shoes">Shoes</Link></li>
          <li><Link to="/pants">Jeans</Link></li>
          <li><Link to="/veste">veste</Link></li>
          <li><Link to="/cart"><FontAwesomeIcon className='icon' icon={faCartShopping} /></Link>({count})</li>
        </ul>
      </nav>
    </>
  )
}

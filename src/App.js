import { useEffect, useState } from 'react'

import initialStoreItems from './store-items'
import Store from './Store'
import Cart from './Cart'
import Total from './Total'

import './styles/reset.css'
import './styles/index.css'

export default function App() {
  const [items, setItems] = useState(initialStoreItems)
  const [cart, setCart] = useState([])
  const [selectedInfo, setSelectedInfo] = useState(null)

  console.log(selectedInfo)
}

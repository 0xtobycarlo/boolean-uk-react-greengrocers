function Store(props) {
  const addToCart = item => {
    const alreadyInCart = props.cart.find(
      existingItem => existingItem.name === item.name
    )

    if (alreadyInCart)
      props.setCart(
        props.cart.map(existingItem =>
          existingItem.name === item.name
            ? { ...existingItem, quantity: existingItem.quantity + 1 }
            : existingItem
        )
      )
    else props.setCart([...props.cart, { ...item, quantity: 1 }])
  }

  return props.items.map((item, index) => {
    return (
      <li key={index}>
        <div
          className="store--item-icon"
          onClick={() => props.setSelectedInfo(item)}
        >
          <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
        </div>
        <button onClick={() => addToCart(item)} className="button">
          Add To Cart
        </button>
      </li>
    )
  })
}

export default Store

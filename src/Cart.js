function Cart(props) {
  const decreaseItem = item => {
    if (item.quantity > 1) {
      props.setCart(
        props.cart.map(existingItem =>
          existingItem.name === item.name
            ? { ...existingItem, quantity: existingItem.quantity - 1 }
            : existingItem
        )
      )
    } else if (item.quantity === 1)
      props.setCart(props.cart.filter(existingItem => existingItem !== item))
  }

  const increaseItem = item => {
    props.setCart(
      props.cart.map(existingItem =>
        existingItem.name === item.name
          ? { ...existingItem, quantity: existingItem.quantity + 1 }
          : existingItem
      )
    )
  }

  return props.cart.map((item, index) => {
    return (
      <li key={index}>
        <img
          className="cart--item-icon"
          src={`/assets/icons/${item.id}.svg`}
          alt={item.name}
        />
        <p>{item.name}</p>
        <button
          onClick={() => decreaseItem(item)}
          className="quantity-btn remove-btn center"
        >
          -
        </button>
        <span className="quantity-text center">{item.quantity}</span>
        <button
          onClick={() => increaseItem(item)}
          className="quantity-btn add-btn center"
        >
          +
        </button>
      </li>
    )
  })
}

export default Cart

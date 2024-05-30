import PropTypes from "prop-types";

const Cart = ({ cartItems, clearCart, checkout }) => {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-[#424242] p-4 rounded shadow">
      <ul id="cart-items" className="list-disc list-inside text-white">
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <p id="cart-total" className="text-lg text-white font-bold mt-4">
        Total: ${total}
      </p>
      <div className="flex justify-between">
        <button
          id="clear-cart"
          className="px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-700 cursor-pointer"
          onClick={clearCart}
        >
          Clear Cart
        </button>
        <button
          id="checkout"
          className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-700 cursor-pointer"
          onClick={checkout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  clearCart: PropTypes.func.isRequired,
  checkout: PropTypes.func.isRequired,
};

export default Cart;

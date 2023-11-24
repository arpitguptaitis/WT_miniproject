import React, { useState } from 'react';
// import './ItalianFoodItems.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';
import Payment from './Payment';

const ItalianFoodItems = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showPayment, setShowPayment] = useState(false);



  const italianDishes = [
    { id: 1, name: 'Pizza Margherita', image: 'https://th.bing.com/th/id/OIP.Ct04r0akZsrq4kJxbe_MBwHaE8?w=301&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7', price: 14.99 },
    { id: 2, name: 'Spaghetti Bolognese', image: 'https://th.bing.com/th?id=OSK.b3160d9166cf66aed380d088e38755ce&w=194&h=271&rs=2&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1', price: 12.99 },
    { id: 3, name: 'Ravioli Carbonara', image: 'data:image/jpeg;base64,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', price: 16.99 },
    { id: 4, name: 'Tiramisu', image: 'https://th.bing.com/th/id/OIP.gnVKFKRZfm6afJDj_uyuGQHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.3&pid=1.7', price: 8.99 },
  ];
  const navigate = useNavigate();

  const handleConfirmOrder = () => {
    // In a real application, you would handle order confirmation logic here
    alert('Order received! Thank you for your purchase!');
    setShowPayment(false);
    setCartItems([]); // Clear the cart after confirming the order
  };
  const handleCancelOrder = () => {
    setShowPayment(false);
  };

  const addToCart = (dish) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === dish.id);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...dish, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === itemId);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      if (updatedCartItems[existingItemIndex].quantity > 1) {
        updatedCartItems[existingItemIndex].quantity -= 1;
      } else {
        updatedCartItems.splice(existingItemIndex, 1); // remove item if quantity is 1
      }
      setCartItems(updatedCartItems);
    }
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleFinalizeOrder = () => {
    // Handle the logic for finalizing the order
    // This can include sending the order to a server, updating the database, etc.
    alert('Order finalized! Total amount: Rs' + calculateTotalAmount());
    
    // Set the flag to indicate that payment should be displayed
    setShowPayment(true);
    // Clear the cart after finalizing the order
    // setCartItems([]);
  };
  return (
    <div className='mexican'>
      <h2>Italian Cuisine</h2>
      <div className="dishes-bucket">
        {italianDishes.map((dish) => (
          <div key={dish.id} className="dish-boxes">
            <img src={dish.image} alt={dish.name} width="100" height="100" />
            <p>{dish.name}</p>
            <p>Price: ₹{dish.price}</p>
            <button onClick={() => addToCart(dish)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart-containers">
        <h3>Items in Cart</h3>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item-box">
            <p>{item.name}</p>
            <p>Price: ₹{item.price * item.quantity}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Decrement</button>
          </div>
        ))}
        {cartItems.length > 0 && !showPayment && (
          <div>
            <p>Total Amount: ₹{calculateTotalAmount()}</p>
            <button onClick={handleFinalizeOrder}>Finalize Order</button>
          </div>
        )}

        {showPayment && (
          <div>
            <h3>Order Summary</h3>
            {cartItems.map((item) => (
              <div key={item.id} className="order-summary-item">
                <p>{item.name}</p>
                <p>Price: ₹{item.price * item.quantity}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            ))}
            <div className='org'>
            <p>Total Amount: ₹{calculateTotalAmount()}</p>
            </div>
            <Payment
              cartItems={cartItems}
              totalAmount={calculateTotalAmount()}
              onConfirmOrder={handleConfirmOrder}
              onCancelOrder={handleCancelOrder}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default ItalianFoodItems;

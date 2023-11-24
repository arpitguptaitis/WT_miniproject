import React, { useState, useEffect } from 'react';

const Payment = ({ cartItems, totalAmount, onConfirmOrder, onCancelOrder }) => {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderDelivered, setOrderDelivered] = useState(false);

  const handlePaymentOption = (option) => {
    setSelectedPaymentOption(option);
  };

  const handleConfirmPayment = () => {
    if (selectedPaymentOption) {
      // In a real application, you would handle payment processing here
      alert(`Order confirmed! Payment received via ${selectedPaymentOption}`);
      setOrderConfirmed(true);
    } else {
      alert('Please select a payment option.');
    }
  };

  const handleTrackOrder = () => {
    // In a real application, you might redirect the user to an order tracking page
    // For simulation, let's set orderDelivered to true after 10 seconds
    setTimeout(() => {
      setOrderDelivered(true);
    }, 10000);
  };

  const handleConfirmDelivery = () => {
    // Display "Thank You" message and reset the page
    alert('Thank you for confirming the delivery! Your order is complete.');
    window.location.reload(); // This will force a page refresh
  };

  // useEffect to handle automatic order delivery confirmation after 10 seconds
  useEffect(() => {
    if (orderDelivered) {
      alert('Your order has been delivered. Please confirm.'); 
    }
  }, [orderDelivered]);


  return (
    <div>
      {/* <h2>Order Summary</h2> */}
      <div className="order-details">
        {/* <h3>Items in Cart</h3>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item-box">
            <p>{item.name}</p>
            <p>Price: ₹{item.price * item.quantity}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
        <div>
          <p>Total Amount: ₹{totalAmount}</p>
        </div> */}
      </div>

      {!orderConfirmed ? (
        <div>
          <h3>Select Payment Option</h3>
          <label>
            <input
              type="radio"
              name="paymentOption"
              value="UPI"
              onChange={() => handlePaymentOption('UPI')}
            />
            UPI
          </label>
          <label>
            <input
              type="radio"
              name="paymentOption"
              value="Card"
              onChange={() => handlePaymentOption('Card')}
            />
            Card
          </label>

          <div>
            <button onClick={handleConfirmPayment}>Confirm Payment</button>
            <button onClick={onCancelOrder}>Cancel Order</button>
          </div>
        </div>
      ) : !orderDelivered ? (
        <div>
          <h3>Order Confirmed!</h3>
          <p>Your order is on its way. Track your order for real-time updates.</p>
          <button onClick={handleTrackOrder}>Track Order</button>
        </div>
      ) : (
        <div>
          <h3>Order Delivered!</h3>
          <p>Please confirm the delivery.</p>
          <button onClick={handleConfirmDelivery}>Confirm Delivery</button>
        </div>
      )}
    </div>
  );
};

export default Payment;
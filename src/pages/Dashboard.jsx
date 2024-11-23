const Dashboard = () => {
  const previousOrders = [
    { id: 1, product: "Smartphone X", date: "2024-11-10", price: 999.99 },
    { id: 2, product: "Laptop Pro", date: "2024-11-15", price: 1499.99 },
  ];

  const wishlist = [
    { id: 1, product: "Wireless Earbuds", price: 199.99 },
    { id: 2, product: "VR Headset", price: 399.99 },
  ];

  const cart = [
    { id: 1, product: "Gaming Console", price: 499.99 },
    { id: 2, product: "4K TV", price: 799.99 },
  ];

  return (
    <div>
      <h1>Dashboard</h1>

      <section>
        <h2>Previous Orders</h2>
        <ul>
          {previousOrders.map((order) => (
            <li key={order.id}>
              {order.product} - {order.date} - ${order.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Wishlist</h2>
        <ul>
          {wishlist.map((item) => (
            <li key={item.id}>
              {item.product} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.product} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;

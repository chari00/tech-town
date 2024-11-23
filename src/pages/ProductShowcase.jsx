import products from "../Products.json";

const AllProductsPage = () => {
  return (
    <div>
      <h1>All Products</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>
              <strong>Price:</strong> ${product.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;

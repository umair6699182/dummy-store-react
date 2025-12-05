export default function ProductCard() {
  const product = {
    id: 1,
    name: "Acme Widget",
    price: 19.99,
    description: "A sample product for Git workflow practice",
  };

  const handleAddToCart = () => {
    console.log(`Product  added to cart.`);
    console.log(`Product ID: ${product.id}`);
  }

  return (
    <div style={{border:"1px solid #ccc", padding:"16px", width:"250px"}}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <strong>${product.price}</strong>
    </div>
  );
}

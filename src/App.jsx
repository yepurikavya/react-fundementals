import ProductCard from "./ProductCard.jsx"
function App() {
  const productName = "chocolate"
  const price = "100"
  const isAvailable = true

  return (
    <>
      <ProductCard productName={productName} price={price} isAvailable={isAvailable}/>
    </>
  )
}

export default App

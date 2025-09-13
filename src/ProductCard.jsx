function ProductCard({productName,price,isAvailable})
{
    
    return(
        <>
        <p>Productname:{productName}</p>
        <p>price:{price}</p>
        <p>{isAvailable===true?"in stock":"out of stock"}</p>
        </>
    )
}
export default ProductCard
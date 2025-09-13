import "./Avatar.css" 
function ProductCard(product)
{
    const title={
     fontSize:'30px',
     fontWight:'bold',
     textAlign:'center',
     color: 'black'
}
    return( 
        <div className="container">
        <p style={title}>Productname:{product.productName}</p>
        <p className="price">price:{product.price}</p>
        <p className="isAvailable">{product.isAvailable===true?<p className="isAvailable">in stock</p>:<p className="isnotAvailable">out of stock</p>}</p>
        </div>
        
    )
}
export default ProductCard  
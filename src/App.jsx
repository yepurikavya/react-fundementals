// //import ProductCard from "./ProductCard.jsx"
// import Blogepost from "./Blogepost.jsx"
// function App() {
//   const posts = [{id:"id1",author: "draksha", Title: "The Notebook", description: "notes" }, 
//     { id:"id2",author: "kavya", Title: "The Notebook", description: "notes" }, 
//     { id:"id3",author: "uma", Title: "The notes", description: "notes" }]
//   // const products = [{ productName: "chocolate", price: 100, isAvailable: true },
//   // { productName: "icecream", price: 50, isAvailable: true },
//   // { productName: "milkshake", price: 200, isAvailable: true },
//   // { productName: "biscuit", price: 20, isAvailable: true }],
// //   return (
// //     <div>
// //       <h1 style={{ textAlign: 'center', color: 'blue' }}>Product List</h1>
// //       {products.map((product) => (
// //         <ProductCard productName={product.productName} price={product.price} isAvailable={product.isAvailable} />
// //       ))}
// //     </div>
// //     function App() {
// //   const posts = [{ author: "Drakshayani", Title: "The Notebook", description: "notes" }, { author: "kavya", Title: "The Notebook", description: "notes" }, { author: "uma", Title: "The notes", description: "notes" }]

// // }
// return (
//   <>
//   <div>
//     {
//      posts.map((post) =>(

//         <Blogepost 
//         key={post.id}
//         author={post.author} title={post.Title} description={post.description} />
//       )
//       )

//     }
//     </div>  </>
// )
    
  
      
// }
import React from 'react'
import { useState } from 'react'
function App(){
const[count,setCount]=useState(0);
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const[formData,setFormData]=useState({
  email:"",
  password:""
})

const handleIncrement=()=>{
  setCount(count+1);
  console.log(count)
}
const handleEmail=(event)=>{
  setEmail(event.target.value);
}
const handlePassword=(event)=>{
  setPassword(event.target.value);
} 
  const handleClick = (name) => {
    console.log('Button clicked!');
    alert("Hello "+ name);
  }
const handleChange=(event)=>{
//  console.log(event.target.name)
//  console.log(event.target.value)
  setFormData({
    ...formData,
    [event.target.name]:event.target.value
  })

}
const handleSubmit=(event)=>{
  event.preventDefault();
  alert(`email: ${formData.email}\n password:+${formData.password}`)
}
  return (
    <div>
      {/* <p>count</p> */}
      <p> i am a button</p>
      <form onSubmit={handleSubmit}>
      <input type="text" name="email" placeholder="enter your email" onChange={handleChange}/>
      <input type="password" name="password" placeholder="enter your password" onChange={handleChange}/>
      <button type="submit">submit</button> 
      </form> 
      <button onClick={handleIncrement}>increment</button>

    </div>
  )

}

export default App
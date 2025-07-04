// //import { useRef , } from "react"
// import './App.css'

// function App() {
//   // useRef
//   const headerRef = useRef(null);
//   const update = () =>{
//     //innerText
//     // headerRef.current.innerText = "Hello Universe"
//     //innerHTML
//     headerRef.current.innerHTML = "<h6>Hello Universe</h6>"
//   }
//   const reset = () =>{
//     //innerText
//     // headerRef.current.innerText = "Hello World"
//     //innerHTML
//     headerRef.current.innerHTML = "<h6>Hello World</h6>"
//   }

//   return (
//     <>
//        <h1 ref={headerRef}>Hello World</h1>
//        <button className="button1" onClick={update}>Update</button>
//        <button className="reset" onClick={reset}>Reset</button>
//     </>
//   )
// }

// export default App

// import reactImage from "./assets/react.svg";
// import "./App.css";
// import { useRef } from "react";

// function App() {

//   // useRef + Attribute
//   const imageRef = useRef(null);
//   const update = () => {
//     // imageRef.current.setAttribute("height", "500px");
//     // imageRef.current.setAttribute("weight", "500px");

//     imageRef.current.setAttribute( "height", "500px", "weight","500px");
//   };

//     return (
//       <>
//       <img src={reactImage} ref={imageRef} alt="react" />
//       <button onClick={update}>Update</button>
      
//       </>

//     );
//   }
// export default App;




// import "./App.css";
// import { useRef } from "react";

// function App() {

//   // useRef + input element 
//   const firstNameRef = useRef();
//   const middleNameRef = useRef();
//   const lastNameRef = useRef();
//   const update = () => {
//     alert(`${firstNameRef.current.value} ${middleNameRef.current.value} ${lastNameRef.current.value}`);
//   };

//     return (
//       <>
//       <input type="text" ref={firstNameRef} placeholder="First Name" />
//       <input type="text" ref={middleNameRef} placeholder="Middle Name" />
//       <input type="text" ref={lastNameRef} placeholder="Last Name" />
//       <button onClick={update}>Update</button>
      
//       </>

//     );
//   }
// export default App;


// import "./App.css";
// import { useRef } from "react";

// function App() {
 
//   // useRef + css class 


//   const headerRef = useRef(null)
 
//   const update = () => {
//     headerRef.current.classList.add("header")
//   };

//     return (
//       <>
//       <h1 ref={headerRef}>Hello world</h1>
//       <button onClick={update}>Update</button>
      
//       </>

//     );
//   }
// export default App;





// import "./App.css";
// import { useState } from "react";

// function App() {
 
//   // Understanding useState management 


//   let [count , setCount] = useState(0);
//   let update = () => {
//     setCount(count + 2);
//   };
 
//     return (
//       <>
//       <h1>{count}</h1> 
//       <button onClick={update}>Update</button>
     
      
//       </>

//     );
//   }
// export default App;



import "./App.css";
import { useState } from "react";

function App() {
 
  // Working with immutable object


  let [myObj, setObj] = useState({
    name:"Arafat",
    age:25,
    city:"Dhaka",
    country:"Bangladesh",
  });
  let update = () => {
    setObj({
      ...myObj,
      name: "Arafat Islam",
      age: 20,
      city:"Tangail",
      country:"Bangladesh",
    })
  };
 
    return (
      <>
      <h1>Name: {myObj.name}</h1> 
      <h1>Age: {myObj.age}</h1> 
      <h1>City: {myObj.city}</h1> 
      <h1>Country: {myObj.country}</h1> 
      <button onClick={update}>Update</button>
     
      
      </>

    );
  }
export default App;


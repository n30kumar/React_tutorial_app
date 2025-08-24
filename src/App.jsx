import React, { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';

// aye par useeffect ka used keyai hai while using the concept of setInterval, setTimeout, etc.
function App() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

// can you used there the setTimeout

useEffect(() => {
  const timeout = setTimeout(() => {
    setTime(prevTime => prevTime + 1);
  }, 1000);

  return () => clearTimeout(timeout);
}, []);

// plese used the useContext concept
const { user, setUser } = useContext(UserContext);


 const[ a, setA ] = React.useState(20);
 const[num, setNum] = React.useState(0);
 const numValue = 10;
 const change1=()=>{
    console.log("clicked");
    setA(40);
  }
const GET_DATA=async()=>{
  const response=await axios.get("https://api.unsplash.com/");
  const data=await response.data;
  console.log(data);
}
  return (
    <div className="App">
      <h1>Hello World! is the context concept </h1>
      <h3> the value of a is {a}</h3>
      <h3> the value of num is {num}</h3>
      <button onClick={change1}>change1</button>
      <br></br>
      <button onClick={()=>{
        setNum(num+1);
      }}>Increament</button>
      <button onClick={()=>{
        setNum(num-1);
      }}  >Decrement</button>
      <Header num={numValue} />
      <Footer />
      <button onClick={GET_DATA}>GET_DATA</button>

<h2>Current Time: {time}</h2>
<h2>Current Time: {time}</h2>



    </div>
  );
}

export default App;

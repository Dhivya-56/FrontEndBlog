import React, {useState,useEffect} from 'react';

function Hai(){
    const [count,setCount]=useState(0)
    function handleClick(){
        setTimeout(()=>{
            setCount(count=>count+1)
          },1000)  
       
    }
    useEffect(()=>{
         handleClick()  
    },[count])
    
 
    return(
        <div>
        {/* <p>I'm {name}</p> */}
        <p>{count}</p>
        <button onClick={handleClick}>my button</button>
        </div>
    )  

}
export default Hai
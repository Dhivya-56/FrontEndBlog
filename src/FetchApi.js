import React,{useState} from 'react';
import { useEffect } from 'react';
function FetchAPI(){
    const [data,setData]=useState([])
    const apiGet=()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setData(json)
        })
    }
    // useEffect(()=>{
    //  apiGet()
    // },[])
    return(
        <div>
MyAPI<br/>
<button onClick={apiGet}>Fetch Api</button>
<br/>
{/* JSON.stringify(value, replacer, space) */}
{/* <pre>{JSON.stringify(data,null,2)}</pre>  */}
  <div>
    <ul>
        {data.map((item)=>{
            return(
            <li>{item.userId},{item.title}</li>
            )
        })}
    </ul>
</div>
        </div> 
    )
}export default FetchAPI;
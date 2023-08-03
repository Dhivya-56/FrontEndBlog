import React,{useState} from 'react';
import './App.css';
import Bloglist from './Bloglist';
const Content = (props) => {
    console.log(props)
    const {data,age}=props
    const[name,setName]=useState('divi');
    const handleClick=()=>{
        console.log('button clicked')
        setName('Romeo')
    }
    // const body=['Title1','Title2'];
    // const author1="Aiyush Bedi";
    // const author2="Bro"
    // const arr=[{title:"brackets",cont:"free"},{title:"brackets2",cont:"free2"}]
    const data2=data.filter(data=>data.author==='divi');
    const data3=data.filter(data=>data.title==='blog2')
    return (
        <div className='content'>
            <Bloglist data={data} />
            <Bloglist className='red' data={data2}/>
            <Bloglist className='blue' data={data3}/>
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>click me</button>
        </div>
        // <div className="contentdiv">
        //    <div className="firstdiv">
        //      <h2 className="tit">Opening Party!</h2>
        //       <p className="cont">Wrriten by malathi</p>
        // </div>
        // <div className="secdiv">
        //       <h2 className="tit">Welcome to the New Blog</h2>
        //        <p className="cont">Wrriten by priya</p>
        // </div>
        // </div>
    )
        {/* <div>
    <h2>{arr[0].title}</h2>
    <p>{arr[0].cont}</p>
    <h2>{arr[1].title}</h2>
    <p>{arr[1].cont}</p>
</div> */}


        // <div>
        //     <h2>{body[0]}</h2>
        //     <p>{author1}</p>
        //     <h2>{body[1]}</h2>
        //     <p>{author2}</p>
        //</div>


        
}
export default Content;
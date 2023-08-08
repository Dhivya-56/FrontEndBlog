
import React from 'react';
const Bloglist=({data,className})=>{
    return(
        <div>
           
            {data.map(item=>{
                return(
                    // <div className={className}>
                    //     {Object.entries(item).map(head=>{
                    //         return(
                    //             <>
                    //             <h2>{head[0]}</h2>
                    //             <p>{head[1]}</p>
                    //             </>
                    //         )
                           
                    //     })}
                        
                        //  </div>
                        <div className={className}>
  {Object.entries(item).map(([key,value]) => {
    switch (key) {
      case 'title':
        return <h2>{value}</h2>;
      case 'author':
        return <p>{value}</p>;
      default:
        return null;
    }
  })}
</div>

       
                )
               
            })}
</div>
    
    
    )
}
export default Bloglist;

// switch (key) {
//     case 'title':
//       return <h2 key={key}>{item[key]}</h2>;
//     case 'content':
//       return <p key={key}>{item[key]}</p>;
//     default:
//       return null;
//   }
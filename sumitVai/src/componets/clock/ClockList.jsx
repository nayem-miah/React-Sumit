import Clock3 from "./Clock3";

function ClockList({quantity}){
    
    return(
       <>
       
       {quantity.map((num)=>(
         
         <Clock3 key={Math.random()}/> //its good practice keep each child a unique identifier.we kept key={} as a identifier
           
       ))}
       
       </>
    );
  }

  export default ClockList;
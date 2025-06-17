 import { useState } from "react";
 
 function Counter(props){
          
        const [value , setValue]  = useState(props.initialVal);
        const handleIncrement =() => {
           setValue(value+1);
        }

        
        const handledeccrement =() => {
             setValue(value-1);
        }
        return <div>
            <div>{value}</div>  
            <button onClick={handleIncrement} >increment(+)</button>   
            <button onClick={handledeccrement} >decrement(-)</button>   
            </div>
    }

export default Counter;
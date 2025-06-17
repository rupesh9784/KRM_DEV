import Counter from "./Counter";

function MultipleCounter(){
    return (
       <div>
         <Counter initialVal={10}/>
         <Counter initialVal={2}/>
         <Counter initialVal={15}/>
       </div>
    );

}


export default MultipleCounter;
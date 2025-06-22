import { useState } from "react";


function InputBox(){

    const [contentVal , setContentVal] = useState("");

   const AddItemHandler = ()=>{
      alert("button was click");
      setContentVal("");

   }
   const changeHandler = (e) => {
       console.log(e.target.value);
       setContentVal(e.target.value);
       console.log("heloo");
   }

   return <div>
      <h2>Input Box</h2>
      <input type="text" onChange={changeHandler} value={contentVal}/>
      <button  onClick={AddItemHandler} >Add item</button>
   </div>
}

export default InputBox;
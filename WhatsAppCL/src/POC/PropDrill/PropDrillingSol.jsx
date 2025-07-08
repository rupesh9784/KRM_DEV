import React, { createContext ,useContext } from "react";

//step 1 create context

const ContextWrapper = createContext();

function PropDrillingSol() {
  const value1 = 10;
  return (
    <>
      <ContextWrapper.Provider value={value1}>
        <div>PropDrilling</div>
        <GrandParent />
      </ContextWrapper.Provider>
    </>
  );
}

function GrandParent() {
 
  return (
    <>
      <h2>Grand Parent</h2>
      <Parent   />
    </>
  );
}

function Parent() {
 

  return (
    <>
      <h2>Parent</h2>
      <Child  />
    </>
  );
}

function Child() {
    const value =  useContext(ContextWrapper);
   
  return (
    <>
      <h2>Child</h2>
      <div>{value}</div>
    </>
  );
}

export default PropDrillingSol;

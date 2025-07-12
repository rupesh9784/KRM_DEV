import React from "react";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import ChatPanel from "./ChatPanel";

function Home() {
  // const handleChange = (e) => {
  //   //  console.log(e.target.files[0]);
  //   const img = e.target.files[0];

  //   const storageRef = ref(storage, "/profile" + Math.random());
  //   const uploadTask = uploadBytesResumable(storageRef, img);
  
  //   uploadTask.on("state_changed" , progressCb , errorCb , finishedCb);


  //   function progressCb(data){
  //     console.log("data" , data);
  //   }

  //   function errorCb(err){
  //     console.log("err" , err);
  //   }

  //   function finishedCb(){
  //     console.log("successfully file upload");
  //     getDownloadURL(uploadTask.snapshot.ref).then(function(url){
  //        console.log(url);
  //     } )
  //   }


  // };

  return (
    <>
      {/* <div>Home</div> */}
      {/* <input 
        type="file"
        accept="image/png image/jpeg image/webp"
        onChange={handleChange}
      /> */}

     {/* leftSidebar
        chatPanel/profile
        

       RightSidebar
        chat screen/ empty screen
     
     */}

     <ChatPanel></ChatPanel>

    </>
  );
}

export default Home;

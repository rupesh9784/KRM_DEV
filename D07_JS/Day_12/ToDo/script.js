console.log("check");
//select
let input = document.querySelector("#taskInput");
let button = document.querySelector("button");
let taskList = document.querySelector("ul");

const addTask= () => {
 // logic for add input
//   alert(input.value);
   const taskText = input.value;
   if(taskText === ""){
    alert("please enter a task");
    return;
   }

   //create node
   const li = document.createElement("li");
    
   //add text
   const taskSpan = document.createElement("span");
   taskSpan.textContent = taskText;

   taskSpan.classList.add("task-text");
   // edit button
   const editBtn = document.createElement("button");
   editBtn.textContent = "edit";
   editBtn.classList.add("task-btn" , "edit-btn");


   editBtn.addEventListener("click" , ()=> {
     const updatedTask = prompt("Edit your task" , taskSpan.textContent);
     if(updatedTask !== null && updatedTask !== ""){
        taskSpan.textContent = updatedTask;
     }
   })
  


   //delete button
   const delBtn = document.createElement("button");
   delBtn.textContent = "delete";
   delBtn.classList.add("task-btn" , "delete-btn");

  delBtn.addEventListener("click" , ()=> {
    // alert("delete task");
    li.remove();
  })
   li.appendChild(taskSpan);
   li.appendChild(editBtn);
   li.appendChild(delBtn);
  
   taskList.appendChild(li);


   //clear input value
   input.value = "";
}



button.addEventListener("click" , addTask);

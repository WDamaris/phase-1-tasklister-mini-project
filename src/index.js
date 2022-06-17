document.addEventListener("DOMContentLoaded",() => {
let myForm=document.querySelector("form")
myForm.addEventListener("submit", (event) =>{
  event.preventDefault();
  enterToDo(event.target.new_task_description.value);
  myForm.reset();
});

});
function enterToDo(new_task){
 let li= document.createElement("li")
 let btn=document.createElement("button")
 btn.addEventListener("click", deleteTask)
 btn.textContent="x";
 li.textContent= `${new_task}`;
 li.appendChild(btn)
 console.log(li)
 document.querySelector("#tasks").appendChild(li);
}
function deleteTask(event){
  event.target.parentNode.remove();
}


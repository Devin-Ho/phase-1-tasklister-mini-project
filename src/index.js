

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const todoForm = document.getElementById('create-task-form');
  todoForm.addEventListener('submit', handleSubmit)
});

function handleSubmit(event) {
  event.preventDefault(); //keep it from reloading a page (the error page) 
  //if name doesn't have the "-" you can do (event.target.name.value);

  //add list to ToDo list 
  const taskList = document.getElementById('tasks');
  const task = document.createElement('li');
  task.textContent = event.target['new-task-description'].value;
  taskList.append(task); //append is more flexible

  //add delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'x';
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(task); //can also do task.remove() -> probably better to use task.remove() method
  });
  task.append(deleteButton);

  event.target.reset(); // will reset all form fields
  //can also do this "event.target['new-task-description'].value = ''; "


}

/* document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target["new-task-description"].value);

    const taskList = document.getElementById('tasks');
    const task = document.createElement('li');
    task.textContent = event.target['new-task-description'].value;
    taskList.append(task); //append is more flexible
  });
}); //look at Video:Forms in JavaScript event section to finish this part
}

*/

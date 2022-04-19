//const input = document.getElementById('input');


document.addEventListener("DOMContentLoaded", () => {
  // your code here

  document.querySelector('form').addEventListener('submit', function (event){
    event.preventDefault();
    console.log(event.target["new-task-description"]);
  });
});




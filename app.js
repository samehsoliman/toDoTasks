// define ui
const form =document.querySelector('form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('ul.list-group');
const clearBtn = document.querySelector('#clear-tasks');

loadEventListners();

// load event listner
function loadEventListners(){
  // load tasks
  document.addEventListener('DOMContentLoaded',loadTasks);

  // add task
  form.addEventListener('submit', addTask);

  // delete task
  taskList.addEventListener('click', deleteTask)

  // clear tasks
  clearBtn.addEventListener('click', clearTasks);

  // filter tasks
  filter.addEventListener('keyup', filterTasks);
}

// load tasks
function loadTasks(){
  let tasks;
  if(localStorage.getItem('tasks') ===null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(task=>{
    displayTask(task);
  })
}

// display tasks
function displayTask(task){
  let li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between align-items-center';
  li.appendChild(document.createTextNode(task));
  let link = document.createElement('a');
  link.innerHTML = '<i class="far fa-times-circle"><i>'
  li.appendChild(link);
  taskList.appendChild(li);

}

// add Task
function addTask(e){
  let newTask = taskInput.value;
  if (newTask === ''){
    alert('Please enter task');
  } else {
    displayTask(newTask);

  let tasks;
  if(localStorage.getItem('tasks') ===null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  
  tasks.push(newTask);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  }

  taskInput.value = '';
  e.preventDefault();
}

// deleteTask
function deleteTask(e){
  if (e.target.classList.contains('fa-times-circle')){
    let taskInput = e.target.parentElement.parentElement.textContent;
    // console.log(task);
    e.target.parentElement.parentElement.remove();
    let tasks;
    if(localStorage.getItem('tasks') ===null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach((task,i)=>{
      if (task === taskInput) {
        tasks.splice(i,1);
      }
    })

    localStorage.setItem('tasks', JSON.stringify(tasks));

  }
}

// clear tasks
function clearTasks(){
  taskList.innerHTML = '';
  localStorage.removeItem('tasks');
}

// filter tasks
function filterTasks(){
  let txt = filter.value.toUpperCase();
  // console.log(txt);
  let tasks = document.querySelectorAll('.list-group-item');
  // console.log(tasks);
  tasks.forEach(task=>{
    if (task.textContent.toUpperCase().indexOf(txt) == -1){
      task.classList.remove ('d-flex');
      task.style.display = 'none';
    } else {
      task.classList.add('d-flex');
      task.style.display = 'block'
    }
  })

}



























































// // define ui
// const form = document.querySelector('form');
// const taskList = document.querySelector('.collection');
// const clearBtn = document.querySelector('.clear-tasks');
// const filter = document.querySelector('#filter');
// const taskInput = document.querySelector('#task');

// // add event listner
// loadEventListeners();

// // load event listner
// function loadEventListeners() {
//   // load tasks
//   document.addEventListener('DOMContentLoaded', loadTasks);

//   // add Task
//   form.addEventListener('submit', addTask);

//   // remove task
//   taskList.addEventListener('click', removeTask);

//   // clear tasks
//   clearBtn.addEventListener('click', clearTasks);

//   // filter tasks
//   filter.addEventListener('keyup', filterTasks);
// }


// // load tasks
// function loadTasks() {
//   let tasks;
//   if (localStorage.getItem('tasks') === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem('tasks'));
//   }

//   tasks.forEach(task => {
//     createTask(task);
//   });

// }


// // create task
// function createTask(task) {
//   const li = document.createElement('li');
//   li.className = 'collection-item';
//   li.appendChild(document.createTextNode(task));
//   const link = document.createElement('a');
//   link.className = 'delete-item secondary-content';
//   link.innerHTML = '<i class="fa fa-remove"></i>';
//   li.appendChild(link);
//   taskList.appendChild(li);

// }

// // add task
// function addTask(e) {
//   let task = taskInput.value;
//   if (task === '') {
//     alert('please enter task');
//   } else {
//     // alert(1);
//     createTask(task);
//   }

//   let tasks;
//   if (localStorage.getItem('tasks') === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem('tasks'));
//   }

//   tasks.push(task);

//   localStorage.setItem('tasks', JSON.stringify(tasks));
//   taskInput.value = '';
//   e.preventDefault();

// }

// // remove task
// function removeTask(e) {
//   if (e.target.classList.contains('fa-remove')) {
//     let txt = e.target.parentElement.parentElement.textContent;
//     console.log(txt);
//     e.target.parentElement.parentElement.remove();

//     let tasks;
//     if (localStorage.getItem('tasks') === null) {
//       tasks = [];
//     } else {
//       tasks = JSON.parse(localStorage.getItem('tasks'));
//     }
//     tasks.forEach((task,i) =>{
//       if (task === txt) {
//         tasks.splice (i,1);
//       }
//     })

//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }
// }

// // clear tasks
// function clearTasks(){
//   taskList.innerHTML = '';
//   localStorage.removeItem('tasks');
// }

// // filter tasks
// function filterTasks(){
//   let txt = filter.value.toUpperCase();
//   // console.log(txt);
//   let tasks = document.querySelectorAll('.collection-item');
//   console.log(tasks);
//   tasks.forEach(task => {
//     if (task.textContent.toUpperCase().indexOf(txt) == -1) {
//       task.style.display = 'none';
//     } else {
//       task.style.display = 'block';
//     }
//   }) 

// }








































// // // define ui
// // const form = document.querySelector('form');
// // const taskList = document.querySelector('.collection');
// // const clearBtn = document.querySelector('.clear-tasks');
// // const filter = document.querySelector('#filter');
// // const taskInput = document.querySelector('#task');

// // // load event listners
// // loadEventListners();

// // // load event listners fun
// // function loadEventListners(){
// //   // load tasks
// //   document.addEventListener('DOMContentLoaded', loadTasks);

// //   // add task
// //   document.addEventListener('submit', addTask);

// //   // delete task
// //   taskList.addEventListener('click', deleteTask);

// //   // clearTasks
// //   clearBtn.addEventListener('click', clearTasks);

// //   // filter Tasks
// //   filter.addEventListener('keyup', filterTasks);
// // }

// // // load tasks fun
// // function loadTasks(){
// //   let tasks;
// //   if(localStorage.getItem('tasks') === null){
// //     tasks = [];
// //   } else {
// //     tasks = JSON.parse(localStorage.getItem('tasks'));
// //   }

// //   tasks.forEach(task =>{
// //     displayTask(task);
// //   })

// // }

// // // display task fun
// // function displayTask(task) {
// //   // create li
// //   let li = document.createElement('li');
// //   li.className = 'collection-item';
// //   li.appendChild(document.createTextNode(task));

// //   // create link
// //   let link = document.createElement('a');
// //   link.className = 'delete-item secondary-content';
// //   link.innerHTML = '<i class="fa fa-remove"></i>';

// //   li.appendChild(link);

// //   taskList.appendChild(li);

// // }

// // // addTask fun
// // function addTask(e){
// //   if (taskInput.value === ''){
// //     alert('please enter task');
// //   } else {
// //     displayTask(taskInput.value);
// //   }

// //   // addTaskToLS
// //   addTaskLS(taskInput.value);

// //   taskInput.value = '';
// //   e.preventDefault();
// // }

// // // add Task LS fun
// // function addTaskLS(task){
// //   let tasks;
// //   if(localStorage.getItem('tasks') === null){
// //     tasks = [];
// //   } else {
// //     tasks = JSON.parse(localStorage.getItem('tasks'));
// //   }

// //   tasks.push(task);

// //   localStorage.setItem('tasks', JSON.stringify(tasks));
// // }

// // // delete task fun
// // function deleteTask(e){
// //   console.log(e.target.parentElement);
// //   if(e.target.parentElement.classList.contains('delete-item')) {
// //     let task = e.target.parentElement.parentElement;

// //     task.remove();

// //     // delete task ls
// //     deleteTaskLS(task.textContent);

// //   }

// // }

// // // delete task LS fun
// // function deleteTaskLS(taskElement){
// //   let tasks;
// //   if(localStorage.getItem('tasks') === null){
// //     tasks = [];
// //   } else {
// //     tasks = JSON.parse(localStorage.getItem('tasks'));
// //   }

// //   tasks.forEach((task,i) =>{
// //     if (task === taskElement) {
// //       tasks.splice(i,1);
// //     } 
// //   })

// //   localStorage.setItem('tasks', JSON.stringify(tasks));
// // }

// // // clear tasks fun
// // function clearTasks(){
// //   taskList.innerHTML = '';

// //   // clear tasks ls
// //   clearTasksLS();
// // }

// // // clear tasks ls fun
// // function clearTasksLS(){
// //   localStorage.removeItem('tasks');
// // }

// // // filter tasks fun
// // function filterTasks(){
// //   let txt = filter.value.toUpperCase();
// //   let tasks  = document.querySelectorAll('.collection-item');
// //   tasks.forEach(task =>{
// //     if (task.textContent.toUpperCase().indexOf(txt) === -1){
// //       task.style.display = 'none';
// //     } else {
// //       task.style.display = 'block';
// //     }
// //   })


// // }






























































// // // define ui var
// // const form = document.querySelector('form');
// // const taskList = document.querySelector('.collection');
// // const clearBtn = document.querySelector('.clear-tasks');
// // const filter = document.querySelector('#filter');
// // const taskInput = document.querySelector('#task');

// // // load event listners
// // loadEventListeners();

// // function loadEventListeners() {
// //   // load event
// //   document.addEventListener('DOMContentLoaded', loadTasks);

// //   // add Tasks
// //   document.addEventListener('submit', addTask);

// //   // delete task
// //   taskList.addEventListener('click', deleteTask);

// //   // clear Tasks
// //   clearBtn.addEventListener('click', clearTasks);

// //   // filter Tasks
// //   filter.addEventListener('keyup', filterTasks);

// // }


// // // load tasks 
// // function loadTasks(e) {
// //   // define tasks array
// //   let tasks;

// //   // load tasks from ls if exist
// //   if (localStorage.getItem('tasks') === null) {
// //     tasks = [];
// //   } else {
// //     tasks = JSON.parse(localStorage.getItem('tasks'));
// //   }

// //   // display tasks
// //   tasks.forEach(task => {
// //     displayTask(task);
// //   });

// // }

// // // display task fun
// // function displayTask(task) {
// //   // create li
// //   const li = document.createElement('li');

// //   // assign classes
// //   li.className = 'collection-item';

// //   // add li content
// //   li.appendChild(document.createTextNode(task));

// //   // create link
// //   const link = document.createElement('a');
// //   link.className = 'delete-item secondary-content';
// //   link.innerHTML = '<i class="fa fa-remove"></i>';

// //   li.appendChild(link);
// //   taskList.appendChild(li);


// // }

// // // add task function
// // function addTask(e) {
// //   if (taskInput.value === '') {
// //     alert('Please add task')
// //   } else {
// //     displayTask(taskInput.value);
// //     addTaskToLocalStoage(taskInput.value);
// //   }

// //   taskInput.value = '';
// //   e.preventDefault();
// // }

// // // add task to local storage
// // function addTaskToLocalStoage(task) {
// //   let tasks = [];
// //   if (localStorage.getItem('tasks') === null) {
// //     tasks = [];
// //   } else {
// //     tasks = JSON.parse(localStorage.getItem('tasks'));
// //   }

// //   tasks.push(task);

// //   localStorage.setItem('tasks', JSON.stringify(tasks));

// // }

// // // delete task
// // function deleteTask(e) {
// //   let task = e.target.parentElement.parentElement;
// //   task.remove();

// //   // delete from ls
// //   deleteTaskFromLocalStorage(task.textContent);


// // }

// // // delete task from ls fun
// // function deleteTaskFromLocalStorage(taskElement) {
// //   let tasks = [];
// //   if (localStorage.getItem('tasks') === null) {
// //     tasks = [];
// //   } else {
// //     tasks = JSON.parse(localStorage.getItem('tasks'));
// //   }

// //   tasks.forEach(function (task, i) {
// //     if (task === taskElement) {
// //       tasks.splice(i, 1);
// //     }
// //   })

// //   localStorage.setItem('tasks', JSON.stringify(tasks));

// // }

// // // function clear tasks
// // function clearTasks(){
// //   // taskList.innerHTML = '';

// //   let tasks = document.querySelectorAll('.collection-item');
// //   // console.log(tasks);
// //   tasks.forEach(task => {
// //     task.remove();
// //   })

// //   clearLocalStorage();
// // }

// // // clear local storage
// // function clearLocalStorage(){
// //   localStorage.removeItem('tasks');
// // }

// // // filter tasks fun
// // function filterTasks(){
// //   let txt = filter.value.toUpperCase();

// //   let tasks = document.querySelectorAll('.collection-item');
// //   tasks.forEach(task => {
// //     if (task.textContent.toUpperCase().indexOf(txt) === -1){
// //       task.style.display = 'none';
// //     } else {
// //       task.style.display = 'block';
// //     }
// //   })

// // }










































// // // Define UI Vars
// // const form = document.querySelector('#task-form');
// // const taskList = document.querySelector('.collection');
// // const clearBtn = document.querySelector('.clear-tasks');
// // const filter = document.querySelector('#filter');
// // const taskInput = document.querySelector('#task');

// // // Load all event listeners
// // loadEventListeners();

// // // Load all event listeners
// // function loadEventListeners() {
// //   // DOM Load event
// //   document.addEventListener('DOMContentLoaded', getTasks);
// //   // Add task event
// //   form.addEventListener('submit', addTask);
// //   // Remove task event
// //   taskList.addEventListener('click', removeTask);
// //   // Clear task event
// //   clearBtn.addEventListener('click', clearTasks);
// //   // Filter tasks event
// //   filter.addEventListener('keyup', filterTasks);
// // }

// // // Get Tasks from LS
// // function getTasks() {
// //   let tasks;
// //   if(localStorage.getItem('tasks') === null){
// //     tasks = [];
// //   } else {
// //     tasks = JSON.parse(localStorage.getItem('tasks'));
// //   }

// //   tasks.forEach(function(task){
// //     // Create li element
// //     const li = document.createElement('li');
// //     // Add class
// //     li.className = 'collection-item';
// //     // Create text node and append to li
// //     li.appendChild(document.createTextNode(task));
// //     // Create new link element
// //     const link = document.createElement('a');
// //     // Add class
// //     link.className = 'delete-item secondary-content';
// //     // Add icon html
// //     link.innerHTML = '<i class="fa fa-remove"></i>';
// //     // Append the link to li
// //     li.appendChild(link);

// //     // Append li to ul
// //     taskList.appendChild(li);
// //   });
// // }

// // // Add Task
// // function addTask(e) {
// //   if(taskInput.value === '') {
// //     alert('Add a task');
// //   }

// //   // Create li element
// //   const li = document.createElement('li');
// //   // Add class
// //   li.className = 'collection-item';
// //   // Create text node and append to li
// //   li.appendChild(document.createTextNode(taskInput.value));
// //   // Create new link element
// //   const link = document.createElement('a');
// //   // Add class
// //   link.className = 'delete-item secondary-content';
// //   // Add icon html
// //   link.innerHTML = '<i class="fa fa-remove"></i>';
// //   // Append the link to li
// //   li.appendChild(link);

// //   // Append li to ul
// //   taskList.appendChild(li);

// //   // Store in LS
// //   storeTaskInLocalStorage(taskInput.value);

// //   // Clear input
// //   taskInput.value = '';

// //   e.preventDefault();
// // }

// // // Store Task
// // function storeTaskInLocalStorage(task) {
// //   let tasks;
// //   if(localStorage.getItem('tasks') === null){
// //     tasks = [];
// //   } else {
// //     tasks = JSON.parse(localStorage.getItem('tasks'));
// //   }

// //   tasks.push(task);

// //   localStorage.setItem('tasks', JSON.stringify(tasks));
// // }

// // // Remove Task
// // function removeTask(e) {
// //   if(e.target.parentElement.classList.contains('delete-item')) {
// //     if(confirm('Are You Sure?')) {
// //       e.target.parentElement.parentElement.remove();

// //       // Remove from LS
// //       removeTaskFromLocalStorage(e.target.parentElement.parentElement);
// //     }
// //   }
// // }

// // // Remove from LS
// // function removeTaskFromLocalStorage(taskItem) {
// //   let tasks;
// //   if(localStorage.getItem('tasks') === null){
// //     tasks = [];
// //   } else {
// //     tasks = JSON.parse(localStorage.getItem('tasks'));
// //   }

// //   tasks.forEach(function(task, index){
// //     if(taskItem.textContent === task){
// //       tasks.splice(index, 1);
// //     }
// //   });

// //   localStorage.setItem('tasks', JSON.stringify(tasks));
// // }

// // // Clear Tasks
// // function clearTasks() {
// //   // taskList.innerHTML = '';

// //   // Faster
// //   while(taskList.firstChild) {
// //     taskList.removeChild(taskList.firstChild);
// //   }

// //   // https://jsperf.com/innerhtml-vs-removechild

// //   // Clear from LS
// //   clearTasksFromLocalStorage();
// // }

// // // Clear Tasks from LS
// // function clearTasksFromLocalStorage() {
// //   localStorage.clear();
// // }

// // // Filter Tasks
// // function filterTasks(e) {
// //   const text = e.target.value.toLowerCase();

// //   document.querySelectorAll('.collection-item').forEach(function(task){
// //     const item = task.firstChild.textContent;
// //     if(item.toLowerCase().indexOf(text) != -1){
// //       task.style.display = 'block';
// //     } else {
// //       task.style.display = 'none';
// //     }
// //   });
// // }


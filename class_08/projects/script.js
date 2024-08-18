const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

let todos = [];

function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
      toggleComplete(index);
    });
    const todoText = document.createElement('span');
    todoText.textContent = todo.text;
    const editButton = document.createElement('button');
    editButton.classList.add('edit');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
      editTodo(index);
    });
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteTodo(index);
    });
    li.appendChild(checkbox);
    li.appendChild(todoText);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
}

function addTodo() {
  const todo = todoInput.value.trim();
  if (todo !== '') {
    todos.push({ text: todo, completed: false });
    todoInput.value = '';
    renderTodos();
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  renderTodos();
}

function editTodo(index) {
  const newText = prompt('Edit todo:', todos[index].text);
  if (newText !== null) {
    todos[index].text = newText;
    renderTodos();
  }
}

addButton.addEventListener('click', addTodo);

// Load existing todos from local storage (optional)
const storedTodos = localStorage.getItem('todos');
if (storedTodos) {
  todos = JSON.parse(storedTodos);
  renderTodos();
}
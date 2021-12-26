const TODO_LIST_LOCAL = "todolist";

let todoListTemp = [];

document.addEventListener("DOMContentLoaded", function() {
    const todoForm = document.querySelector("#todoForm");
    todoForm.addEventListener("submit", addTodoList);

    loadLocalstorageTodoList();
});

function addTodoList(e) {
    e.preventDefault();

    const todoInput = todoForm.querySelector("input:first-child");
    const todoText = todoInput.value;
    const todoId = Date.now();
    const todoObj = {
        "id" : todoId,
        "todo" : todoText
    }

    // todo리스트에 출력
    printTodo(todoObj);

    // input 초기화
    todoInput.value="";
}

function saveLocalstorageTodoList() {
    localStorage.setItem(TODO_LIST_LOCAL, JSON.stringify(todoListTemp));
}

function loadLocalstorageTodoList() {
    const todoListData = localStorage.getItem(TODO_LIST_LOCAL);
    const todosArray = todoListData? JSON.parse(todoListData) : [];

    todosArray.forEach(todoObj => {
        printTodo(todoObj);
    });
}

function printTodo(todoObj) {
    const liObj = document.createElement("li");
    const delObj = document.createElement("button");

    // li 객체 생성 및 텍스트 추가
    liObj.id = todoObj.id;
    liObj.innerText = todoObj.todo;

    // delete 버튼 생성 및 추가
    delObj.innerText = "❌";
    delObj.addEventListener("click", deleteTodoList);
    liObj.appendChild(delObj);

    // 리스트에 추가
    const todoList = document.querySelector("#todoList");
    todoList.appendChild(liObj);

    // Localstorage 처리
    todoListTemp.push(todoObj);
    saveLocalstorageTodoList();
}

function deleteTodoList() {
    const liObj = this.parentElement;

    // Localstorage 처리
    todoListTemp = todoListTemp.filter((toDo) => toDo.id !== liObj.id);
    saveLocalstorageTodoList();

    // 리스트 삭제
    liObj.remove();
}
// input에 원하는 todo 넣기
// submit event 실행 후 refresh 막기
// console에 input.value 출력
// enter 치고 input 칸 비우기
const todoForm = document.querySelector("#todo-form");
const formInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");  //ul

const TODOS_KEY = "todos";

// 창 열리면 parsed 된 상태
let todoArray = [];

function saveTodo(){
    // localStorage 저장
    // todos 하나의 key에 여러개의 value 저장될 수 있음
    // JSON.stringify() => 변수의 값을 모양 그대로 문자열로 바꿈 => JSON.parse()로 복구
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoArray));
}

function removeTodo(e){
    //console.log(e.target.parentElement);
    const li = e.target.parentElement;
    // element li remove
    li.remove();
    // storage update
    todoArray = todoArray.filter(todo => todo.id !== parseInt(li.id));
    saveTodo()
}

//print todo-list
function paintTodo(newTodoObj){
    // create li
    const li = document.createElement("li");    
    li.id = newTodoObj.id;
    // create span under li
    const span = document.createElement("span");
    span.innerText = `${newTodoObj.text}  `;
    // create buttn under li
    const btn = document.createElement("button");
    btn.innerText = "❌";
    // btn mouseclick event
    btn.addEventListener("click", removeTodo);
    // put li under todoList(ul)
    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
}

//receive todo
function handleTodoSubmit(e){
    //refresh 막기
    e.preventDefault();
    //input.value 받아오기
    const newTodo = formInput.value;
    //localStorage.setItem("", formInput.value);
    formInput.value = "";
    // todoObject 생성
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    }
    // todo 출력
    paintTodo(newTodoObj);    
    // todo를 원래 배열에 저장 
    todoArray.push(newTodoObj);
    saveTodo();
}






// todoArray에 element 추가해도 초기화 안되게 하고싶다
const savedTodo = localStorage.getItem(TODOS_KEY);
const parsedTodo = JSON.parse(savedTodo);
// if there is savedTodo, execute
if(savedTodo !== null){
    todoArray = parsedTodo;
    parsedTodo.forEach(paintTodo);      // lambda has appeared!!!!!!
}


todoForm.addEventListener("submit", handleTodoSubmit);


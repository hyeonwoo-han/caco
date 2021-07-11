//element 받아오기
//div input button
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const link = document.querySelector("a");
const h1 = document.querySelector("#hello");


//중복되는 string만 포함된 상수는 보통 대문자로 표기한다
//전역변수
const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";
const usernameKey = localStorage.getItem(USERNAME_KEY);



//onLoginSubmit
//<form>에 대한 브라우저의 기본동작 막기
function onLoginSubmit(event){
  event.preventDefault();
  console.log(event);

  const username = loginInput.value;  //로컬변수
  loginForm.classList.add(HIDDEN_CLASS);
  //key: username, value: loginInput.value
  localStorage.setItem(USERNAME_KEY, username); 


  //h1.innerText에 username 추가 
  //h1 윈도우에 표시
  //h1.innerText = "Hello " + username + "!!";
  sayHello(username);
  console.log("hello", username);
}

//prevent link
//<a>에 대한 브라우저의 기본동작 막기
//function handleLinkClick(event){
//  event.preventDefault();
//  console.log(event);
//}

function sayHello(username){  //username
  h1.innerText = `Hello ${username}!!`;// '',""가 아니라 백틱기호임(esc)
  h1.classList.remove(HIDDEN_CLASS);
}


if(usernameKey == null){
  //form 표시
  loginForm.classList.remove(HIDDEN_CLASS)
  loginForm.addEventListener("submit", onLoginSubmit);
  //link.addEventListener("click", handleLinkClick);
}else{
  //form 지우고 h1 표시
  loginForm.classList.add(HIDDEN_CLASS);
  sayHello(usernameKey);
}



const imgs = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
const chosenImg = imgs[Math.floor(Math.random() * imgs.length)];

const elementBody = document.querySelector("body");
//css 프로퍼티를 js에 사용할땐 -(hypen) 대신 camel 표기법 사용
elementBody.style.backgroundImage = `url('img/${chosenImg}')`;
//document.body.style.opacity = '0.8';

// body vertical center
const idCenter = document.querySelector("div#center");
const height = window.innerHeight;    //number
const verticalCenter = height / 2;
idCenter.style = `position : relative; top : ${verticalCenter}px; text-align : center;`;



//const bgImg = document.createElement("img");
//bgImg.src = `img/${chosenImg}`;
//bgImg.style.backgroundSize = 'cover';
//document.body.appendChild(bgImg);

const imgs = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const chosenImg = imgs[Math.floor(Math.random() * imgs.length)];

const elementBody = document.querySelector("body");
//css 프로퍼티를 js에 사용할땐 -(hypen) 대신 camel 표기법 사용
elementBody.style.backgroundImage = `url('/Users/caco/Documents/momentum/img/${chosenImg}')`;
document.body.style.opacity = '0.8';


//const bgImg = document.createElement("img");
//bgImg.src = `img/${chosenImg}`;
//bgImg.style.backgroundSize = 'cover';
//document.body.appendChild(bgImg);

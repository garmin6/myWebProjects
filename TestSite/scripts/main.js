var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/img1.png') {
      myImage.setAttribute('src', 'images/img2.png');
    } else if(mySrc === 'images/img2.png'){
      myImage.setAttribute('src', 'images/img3.png');
    } else{
      myImage.setAttribute('src', 'images/img1.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = '你好，亲爱的' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = '你好，亲爱的' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');
var title = document.querySelector('h1');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* 遍历图片并添加至缩略图区 */
for(var i=1; i<6; i++){
  var newImage = document.createElement('img');
  var imageName = 'images/pic'+i+'.jpg';
  newImage.setAttribute('src', imageName);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', function(e){
    displayedImage.setAttribute('src', e.target.src);
  });
}

/* 编写 变亮/变暗 按钮 */

btn.addEventListener('click', function (){
  var btnInfo = btn.getAttribute('class');
  if(btnInfo==="dark"){
    btn.setAttribute('class','light');
    btn.textContent = '变亮';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.4)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = '变暗';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});

// function dim() {
//   overlay.style.backgroundColor='rgba(0,0,0,0.4)';
// }
// function rec() {
//   overlay.style.backgroundColor='rgba(0,0,0,0)';
// }
// overlay.addEventListener('mouseover',dim);
// overlay.addEventListener('mouseout',rec);

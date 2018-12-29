var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

document.getElementById('cn').onclick = function () {
  document.title = '笑话生成器';
  document.getElementById('lbl-customname').textContent = '请输入自定义的名字：';
  document.getElementById('lbl-cn').textContent = '中国';
  document.getElementById('lbl-us').textContent = '美国';
  document.getElementById('lbl-uk').textContent = '英国';
  document.getElementById('customname').placeholder = '李雷';
  document.querySelector('.randomize').textContent = '随机生成笑话';
};

document.getElementById('us').onclick = document.getElementById('uk').onclick = function () {
  document.title = 'Silly story generator';
  document.getElementById('lbl-customname').textContent = 'Enter custom name:';
  document.getElementById('lbl-cn').textContent = 'CN';
  document.getElementById('lbl-us').textContent = 'US';
  document.getElementById('lbl-uk').textContent = 'UK';
  document.getElementById('customname').placeholder = 'Bob';
  document.querySelector('.randomize').textContent = 'Generate random story';
};

var storyTextZh="外边有34度，于是:inserta:出去遛弯。当走到:insertb:时他们被眼前的景象惊呆了，然后就:insertc:。李雷全程目睹但他并没有慌，因为:inserta:是一个270斤的胖子，天气又辣么热。";
var insertA=["怪兽威利","大老爹","圣诞老人"];
var insertB=["救助站","迪士尼乐园","白宫"];
var insertC=["自燃了","在人行道化成了一坨泥","变成一条鼻涕虫爬走了"];

var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
var insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
var insertY = ['the soup kitchen','Disneyland','the White House'];
var insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
  var newStoryText, character, place, action;                      

  if(document.getElementById('cn').checked){
    if(customName.value !== '') {
      var name = customName.value;
      newStoryText = newStoryText.replace("李雷",name);
    }
    newStoryText=storyTextZh;    
    character=randomValueFromArray(insertA);
    place=randomValueFromArray(insertB);
    action=randomValueFromArray(insertC);
    newStoryText = newStoryText.replace(/:inserta:/g,character).replace(":insertb:",place).replace(":insertc:",action);
  } else{
    if(customName.value !== '') {
      var name = customName.value;
      newStoryText = newStoryText.replace('Bob',name);
    }
    newStoryText=storyText;    
    character=randomValueFromArray(insertX);
    place=randomValueFromArray(insertY);
    action=randomValueFromArray(insertZ);
    newStoryText = newStoryText.replace(":insertx:",character).replace(":insertx:",character).replace(":inserty:",place).replace(":insertz:",action); 
  }  

  story.textContent = newStoryText;
  story.style.visibility = 'visible';
}
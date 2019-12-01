

// left menu hidd-show {
var menuAppear = document.body.querySelector('#menu_appear');
function menuClick() {
  $('#menu').toggleClass('grid_left');
  $('#menu').toggleClass('grid_left_show');
  menuAppear.innerHTML = (menuAppear.innerHTML == '&gt;' ? '&lt;':'&gt;');  // change value #menu_appear '>' =|= '<'
  $('#slider').css('display', 'none');
};
// left menu hidd-show }



// slider {
var slider = document.body.querySelector('#slider');
var init = document.body.querySelectorAll('.init');
var slideClose = document.body.querySelector('#slideClose');
var img = document.body.querySelector('#slideIn img');
var sl_left = document.body.querySelector('#sl_left');
var sl_button_left = document.body.querySelector('#sl_button_left');
var sl_right = document.body.querySelector('#sl_right');
var sl_button_right = document.body.querySelector('#sl_button_right');
var pageID = document.body.querySelector('.content').firstElementChild.getAttribute('id');
var lastImgSrc = init[init.length-1].lastElementChild.getAttribute('src');
var photoNumber;
var positionInfo;


  // slider start {
for(let fig=0; fig<=init.length-1; fig++) {
  init[fig].onclick = function(event) {
    var target = event.target;
    if (target.tagName == 'IMG') {
      slider.style.display = 'block';
      photoNumber = target.getAttribute('src')[23 + pageID.length];
      var photoNumber_nextSimb = target.getAttribute('src')[24 + pageID.length];
      console.log('1-й символ: ' + photoNumber);
      console.log('2-й символ: ' + photoNumber_nextSimb);
      
      if (!isNaN(photoNumber_nextSimb)){
        photoNumber += photoNumber_nextSimb;
      }
      
      img.src = '../../photo/' +pageID+ '/full/full_' +photoNumber+ '.jpg';
      console.log('стартовое фото № ' + photoNumber);
    }
  }
};

  // slider start }

function adaptiveSL() {  // sliderBox size = loadedImage size
  slider.style.height = '90%';
  slider.style.width = '90%';
  slider.style.height = img.height + 'px';
  slider.style.width = img.width + 'px';
  console.log('высота картинки: ' + img.height);
  console.log('ширина картинки: ' + img.width);
};

  // flipping slider {
    // get quantity of photos on page {
var lastPhoto_FirstSimb = lastImgSrc[lastImgSrc.length-6];
var lastPhoto_SecondSimb = lastImgSrc[lastImgSrc.length-5];
var lastPhotoNum = lastPhoto_FirstSimb + lastPhoto_SecondSimb;
console.log('всего фоток на странице: ' + lastPhotoNum);
    // get quantity of photos on page }

+photoNumber;
sl_left.onclick = function() {
  photoNumber--;
  console.log('переход на фото: ' + photoNumber);
  if (photoNumber < 1) {
    photoNumber = lastPhotoNum;
  }
  img.src = '../../photo/' +pageID+ '/full/full_' +photoNumber+ '.jpg';
  // sizeImg = img.getBoundingClientRect();
  // setTimeout(adaptiveSL, 300);
}
sl_right.onclick = function() {
  photoNumber++;
  console.log('переход на фото: ' + photoNumber);
  if (photoNumber > lastPhotoNum) {
    photoNumber = 1;
  }
  img.src = '../../photo/' +pageID+ '/full/full_' +photoNumber+ '.jpg';
  // sizeImg = img.getBoundingClientRect();
  // setTimeout(adaptiveSL, 300);
};
  // flipping slider }

slideClose.onclick = function() { // close slider
  slider.style.display = 'none';
};


  // slider decor {
function opacL_over(){
  sl_button_left.style.opacity = '0.6';
}
function opacL_out(){
  sl_button_left.style.opacity = '0.1';
}

function opacR_over(){
  sl_button_right.style.opacity = '0.6';
}
function opacR_out(){
  sl_button_right.style.opacity = '0.1';
}
  // slider decor }
// slider }

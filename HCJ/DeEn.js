const carouselcon=document.getElementById("list-contain");
const count = 2;
let pos = 0;
let pixel=0;
function Back(){
  if (pos>0){
    pos--;
    pixel = 500*pos;
    console.log(carouselcon.style['transform']= `translateX(-${pixel}px)`);
  }
}
function Forward(){
  if (pos < count){
    pos++;
    pixel = 500*pos;
    console.log(carouselcon.style['transform']= `translateX(-${pixel}px)`);
  }
}

let array;

function encrypt(){
  var text = document.getElementById('encrypt');
  var message = text.value;
  console.log(message);
  let message_1 = message.split('');
  array = new Array(message_1.length).fill('');
  console.log(message_1);
  
  message_1.forEach((element, index) => {
    let asciivalue = message_1[index].charCodeAt(0); 
    console.log(asciivalue); 
    array[index] = String.fromCharCode(asciivalue + 100);    
  });
  console.log(array);
  array = array.join('');
  randomchar(3);

  text.value = '';
  display_encrypt();
}

function randomchar(string_len){
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
  var random_str_1 = '';
  var random_str_2 = '';

  for (var i, i = 0;  i < string_len; i++){
    random_str_1 += chars.charAt(Math.floor(Math.random() *  chars.length)); 
    random_str_2 += chars.charAt(Math.floor(Math.random() *  chars.length)); 
  }
  array = random_str_1 + array + random_str_2;
  console.log(array);
}

function display_encrypt(){
  var dis_text = document.getElementById('decrypt');
  dis_text.textContent = array;
  
}

// let array;

function decrypt(){
  var text = document.getElementById('decrypt');
  var message = text.value;
  message = message.slice(3,[(message.length)-3]);
  console.log(message);
  let message_1 = message.split('');
  array = new Array(message_1.length).fill('');
  console.log(message_1);
  
  message_1.forEach((element, index) => {
    let asciivalue = message_1[index].charCodeAt(0); 
    console.log(asciivalue); 
    array[index] = String.fromCharCode(asciivalue - 100);    
  });
  console.log(array);
  array = array.join('');
  // randomchar(3);

  text.value = '';
  display_decrypt();
}

function display_decrypt(){
  var dis_text = document.getElementById('encrypt');
  dis_text.value = array;

}

// function showSlide(slideId) {
// const slide = document.getElementById(slideId);
// slide.scrollIntoView({ behavior: 'smooth' });
// event.preventDefault();
// }
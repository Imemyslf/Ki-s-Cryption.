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

let encryptedText;
let decryptedText;

function encrypt(){
  console.log('start_en');
  var en_text = document.getElementById('encrypt');
  console.log(en_text.value);
  var message = en_text.value;
  console.log(message);
  let message_1 = message.split('');
  encryptedText = '';
  console.log(message_1);
  
  message_1.forEach((element, index) => {
    let asciivalue = message_1[index].charCodeAt(0); 
    console.log(asciivalue); 
    encryptedText += String.fromCharCode(asciivalue + 100);    
  });
  console.log(encryptedText);
  en_text.value = '';  
  randomchar(3);
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
  encryptedText = random_str_1 + encryptedText + random_str_2;
  console.log(encryptedText);
}

function display_encrypt(){
  var dis_text = document.querySelector('#decrypt');
  dis_text.value = encryptedText;
  
}

function decrypt(){
  console.log('start_de');
  var de_text = document.getElementById('decrypt');
  console.log(de_text.value);
  var message = de_text.value;
  message = message.slice(3,[(message.length)-3]);
  console.log(message);
  let message_1 = message.split('');
  decryptedText = '';
  console.log(message_1);
  
  message_1.forEach((element, index) => {
    let asciivalue = message_1[index].charCodeAt(0); 
    console.log(asciivalue); 
    decryptedText += String.fromCharCode(asciivalue - 100);    
  });
  console.log(decryptedText);

  de_text.value = '';
  display_decrypt();
}

function display_decrypt(){
  var dis_text = document.getElementById('encrypt');
  dis_text.value = decryptedText;

}

// function showSlide(slideId) {
// const slide = document.getElementById(slideId);
// slide.scrollIntoView({ behavior: 'smooth' });
// event.preventDefault();
// }
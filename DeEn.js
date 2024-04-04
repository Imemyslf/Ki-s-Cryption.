const slides = document.querySelectorAll(".slide");
// const slide_2 = document.querySelector(".btn_2");
var counter = 0;

    slides.forEach(
        (slide,index)=> {
            slide.style.left = `${index * 100}%`
        }
    )

const goPrev = () => {
    if (counter === 0)
        counter++;
    counter--;
    slideimg();
    console.log(counter);
}

const goNext = () => {
    if (counter === (slides.length)-1)
        counter--;
    counter++;
    slideimg();
    console.log(counter);
}

const slideimg= () => {
    slides.forEach(
        (slide) =>{
            if (counter >= 0 && counter <= (slides.length) - 1)
            slide.style.transform = `translateX(-${counter*100}%)`;
        }
    )
    
}
const slides = document.querySelectorAll(".slide");
// const slider = document.querySelector(".slide");
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

var mainbox = document.querySelector('#container');
mainbox.addEventListener('wheel', function(event) {
    // Check if the shift key is pressed
    if (event.shiftKey) {
        // Prevent the default behavior of mouse scrolling
        event.preventDefault();

        // Calculate the amount to scroll vertically
        var scrollAmount = event.deltaY;

        // Set the vertical scroll position by adding the scroll amount
        mainbox.scrollTop += scrollAmount;
    } else {
        // Prevent the default behavior of mouse scrolling
        event.preventDefault();

        // Calculate the amount to scroll horizontally
        var scrollAmount = event.deltaY;

        // Set the horizontal scroll position by adding the scroll amount
        mainbox.scrollLeft += scrollAmount;
    }
});
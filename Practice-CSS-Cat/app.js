var pics = [
    "Images/1.jpeg",
    "Images/2.jpeg",
    "Images/3.jpeg",
    "Images/4.jpeg",
    "Images/5.jpeg"
];

var button = document.querySelector("button");
var image = document.querySelector("img");
var counter = 1;

button.addEventListener('click', () => {
    if (counter === 5) {
        counter = 0;
    }
    image.src = pics[counter];
    counter++;
})
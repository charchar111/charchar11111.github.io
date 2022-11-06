const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.className = "background-image";
bgImage.src = `image/${chosenImage}`;
bgImage.src = `file:///C:/Users/3hjab/Desktop/momentum-clone/img/${chosenImage}`;
console.log(bgImage);

document.body.appendChild(bgImage);

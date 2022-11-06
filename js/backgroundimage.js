const images = ["0.JPG", "1.JPG", "2.JPG", "3.JPG"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `image/${chosenImage}`;
console.log(bgImage);

document.body.appendChild(bgImage);

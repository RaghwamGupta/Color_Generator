// Select DOM elements
const div = document.querySelector("div");
const btn = document.querySelector("button");
const h1 = document.querySelector("h1");

// Add event listener for button
btn.addEventListener("click", function () {
    const randomColor = getRandomColor();
    const hexColor = rgbToHex(randomColor);

    // Update heading to say "Color Generated!"
    h1.innerText = "✨ Your New Color ✨";

    // Update div background color
    div.style.backgroundColor = randomColor;

    // Show color codes inside div
    div.innerHTML = `<p style="margin:0; font-size:16px;">RGB: ${randomColor}</p>
                     <p style="margin:0; font-size:14px;">HEX: ${hexColor}</p>`;

    console.log("Color Updated:", randomColor, hexColor);
});

// Function to generate random rgb color
function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

// Function to convert rgb string → hex code
function rgbToHex(rgb) {
    const rgbValues = rgb.match(/\d+/g).map(Number); // Extract numbers from rgb(...)
    return (
        "#" +
        rgbValues
            .map((val) => {
                const hex = val.toString(16);
                return hex.length === 1 ? "0" + hex : hex;
            })
            .join("")
    );
}

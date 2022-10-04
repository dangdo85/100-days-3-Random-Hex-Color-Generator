const hex = document.querySelector(".hex")
const RGB = document.querySelector(".RGB")
const pageBtn = document.querySelector(".generate-page")

const generatePageColor = () => {
  // use toString(16) to include letters
  // use substring(2, 8) to take first 6 digits that are not the first 0 and decimal(.)
  const randomColor = Math.random().toString(16).substring(2, 8)
  document.body.style.backgroundColor = "#" + randomColor
  hex.innerHTML = "#" + randomColor

    const aRgbHex = randomColor.match(/.{1,2}/g);
    const aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
    RGB.innerHTML = aRgb;

// console.log('1502BE'.convertToRGB());
// console.log('ff0000'.convertToRGB());
// console.log('f00'.convertToRGB());
}

const generateTextColor = () => {
  const randomColor = Math.random().toString(16).substring(2, 8)
  document.body.style.backgroundColor = "#" + randomColor
}

const generateContainerColor = () => {
  const randomColor = Math.random().toString(16).substring(2, 8)
  document.body.style.backgroundColor = "#" + randomColor
}
pageBtn.addEventListener("click", generatePageColor)

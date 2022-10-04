const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

const generateNumber = () => {
  const maxRange = document.querySelector('.input').value
  const randomNumber = Math.floor(Math.random() * maxRange + 1);
  number.innerHTML = randomNumber;
}

btn.addEventListener("click", generateNumber);
const btn = document.querySelector(".btn");
const img = document.querySelector("img");
const content = document.querySelector(".content");
const url = "https://api.icndb.com/jokes/random?escape=javascript";
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.log(error);
  }
}
function displayData(data) {
  img.classList.add("shake-img");
  const {
    value: { joke },
  } = data;
  content.innerText = joke;
  // const random = Math.random() * 1000;
  // console.log(random);
  setTimeout(function () {
    img.classList.remove("shake-img");
  }, 1000);
}
btn.addEventListener("click", fetchData);

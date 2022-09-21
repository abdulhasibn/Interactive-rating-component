const ratingButtons = document.querySelectorAll(".clicked_state");
const ratingButtonsArr = Array.from(ratingButtons);
console.log(ratingButtonsArr);
ratingButtonsArr.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button);
    button.classList.toggle("normal");
  });
});

const ratingButtons = document.querySelectorAll(".normal");
const ratingButtonsArr = Array.from(ratingButtons);
console.log(ratingButtonsArr);
ratingButtonsArr.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button);
    button.classList.toggle("clicked_state");
  });
});

const submitButton = document.querySelector(".submit_btn");
submitButton.addEventListener("click", () => {
  const thankYouState = document.querySelector(".thank_you_state");
  thankYouState.classList.toggle("visible_thanks");
  const ratingState = document.querySelector(".rating_state");
  ratingState.classList.add("invisible_rating");
});

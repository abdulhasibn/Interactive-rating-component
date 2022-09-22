const submitButton = document.querySelector(".submit_btn");
submitButton.addEventListener("click", () => {
  const thankYouState = document.querySelector(".thank_you_state");
  thankYouState.classList.toggle("visible_thanks");
  const ratingState = document.querySelector(".rating_state");
  ratingState.classList.add("invisible_rating");
});
const ratingResult = document.querySelector(".rating_result");
const ratingButtons = document.querySelectorAll(".normal");
const ratingButtonsArr = Array.from(ratingButtons);
let ratingValue;
ratingButtonsArr.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button);
    ratingValue = button.value;
    ratingResult.innerText = `You selected ${ratingValue} out of 5`;
  });
});

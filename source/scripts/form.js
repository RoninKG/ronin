const getMessageValue = () => {
  const message = document.querySelector(".form-control");
  return console.log(message.value);
};

const form = document.querySelector(".btn-push");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(getMessageValue());
});

const inputEl = document.querySelector(".inputs");
const btnEl1 = document.querySelector(".btn_active");
const btnEl2 = document.querySelector(".btn_close");

btnEl1.addEventListener("click", () => {
  btnEl1.style.display = "none";
  btnEl2.style.display = "block";
  inputEl.type = "password";
});

btnEl2.addEventListener("click", () => {
  btnEl1.style.display = "block";
  btnEl2.style.display = "none";
  inputEl.type = "text";
});
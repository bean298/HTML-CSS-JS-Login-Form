var formBody = document.querySelector(".form_body");
var loginLink = document.querySelector(".login_link");
var registerLink = document.querySelector(".register_link");
var headerBtnLogin = document.querySelector(".header_navigation-btn");
var iconClose = document.querySelector(".icon_close");

registerLink.addEventListener("click", () => {
  formBody.classList.add("active");
});

loginLink.addEventListener("click", () => {
  formBody.classList.remove("active");
});

headerBtnLogin.addEventListener("click", () => {
  formBody.classList.add("active_headerbtn");
});

iconClose.addEventListener("click", () => {
  formBody.classList.remove("active_headerbtn");
});

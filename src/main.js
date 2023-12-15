const htmlElement = document.querySelector("html");
const toggle = document.querySelector("#toggle");
const toggleSm = document.querySelector("#toggle-sm");

if (localStorage.getItem("darkMode") === null)
  localStorage.setItem("darkMode", false);
else if (localStorage.getItem("darkMode") === "false")
  htmlElement.classList.remove("dark");
else htmlElement.classList.add("dark");

const changeTheme = () => {
  if (htmlElement.classList.contains("dark")) {
    localStorage.setItem("darkMode", false);
    htmlElement.classList.remove("dark");
  } else {
    localStorage.setItem("darkMode", true);
    htmlElement.classList.add("dark");
  }
};

toggle.addEventListener("click", changeTheme);
toggleSm.addEventListener("click", changeTheme);

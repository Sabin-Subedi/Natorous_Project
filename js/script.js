var nav_link = document.querySelectorAll(".navigation__link");
var checkbox = document.querySelector(".navigation__checkbox");

for (i = 0; i < nav_link.length; i++) {
  nav_link[i].addEventListener("click", function () {
    // console.log(checkbox.checked);
    checkbox.checked = false;
  });
}

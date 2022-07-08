const refs = {
  alert: document.querySelector(".backdrop"),
  close: document.querySelector(".warning_btn-close"),
};
refs.close.addEventListener("click", closeMenu);
let value = 0;
function closeMenu() {
  value += 1;
  const contains = refs.alert.classList.contains("is-hidden");
  if (!contains) {
    refs.alert.classList.add("is-hidden");
  }
}

function func() {
  refs.alert.classList.remove("is-hidden");
  if (value >= 3) {
    clearTimeout(timerId);
    refs.alert.classList.add("is-hidden");
  }
}

const timerId = setInterval(func, 3000);

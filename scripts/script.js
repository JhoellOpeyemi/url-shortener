const modal = document.querySelector(".modal-bg");
const openModalBtn = document.querySelector(".open-modal");
const closeModalBtn = document.querySelector(".close-modal");

openModalBtn.addEventListener("click", () => {
  setTimeout(function () {
    modal.classList.add("active");
  }, 2000);
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

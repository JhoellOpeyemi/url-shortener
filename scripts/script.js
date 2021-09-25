const modal = document.querySelector(".modal-bg");
const openModalBtn = document.querySelector(".open-modal");
const closeModalBtn = document.querySelector(".close-modal");
const modalInput = document.querySelector(".modal-input");
const pasteLinkInput = document.querySelector(".paste-link-input");

openModalBtn.addEventListener("click", (e) => {
  if (pasteLinkInput.value != "") {
    e.preventDefault();
    setTimeout(function () {
      modalInput.value = pasteLinkInput.value;
      modal.classList.add("active");
    }, 2000);
  }
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

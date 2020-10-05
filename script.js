const wip = document.querySelectorAll(".soon");
const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modal-content");

const showModal = (msg) => {
  modalContent.innerHTML = msg;
  modal.classList.remove("hidden");
};
const hideModal = () => {
  modal.classList.add("hidden");
};

for (let i = 0; i < wip.length; i++) {
  wip[i].addEventListener("click", (e) => {
    e.preventDefault();
    showModal("Soon, soon !");
  });
}

modal.addEventListener("click", () => {
  hideModal();
});

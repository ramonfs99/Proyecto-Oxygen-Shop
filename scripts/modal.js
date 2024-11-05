document.addEventListener("DOMContentLoaded", () => {
    const modalContainer = document.getElementById("modal");
    const closeButton = document.querySelector(".modal__form__btn-close");
    const popupForm = document.querySelector(".modal__form");
  
    const isModalSeen = () => localStorage.getItem("modalSeen") === "false";
  
    const openModal = () => {
      modalContainer.style.display = "flex";
    };
  
    const closeModal = () => {
      modalContainer.style.display = "none";
      localStorage.setItem("modalSeen", "true");
    };
  
    closeButton.addEventListener("click",  (event) => {
      event.preventDefault();
      closeModal();
    });
  
    window.addEventListener("click", (event) => {
      if (event.target === modalContainer) {
        closeModal();
      }
    });
  
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    });
  
    setTimeout(() => {
      if (!isModalSeen()) {
        openModal();
      }
    }, 5000);
  
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const scrollLimit = document.documentElement.scrollHeight * 0.25;
      if (scrollPosition >= scrollLimit && !isModalSeen()) {
        openModal();
      }
    });
  });
  
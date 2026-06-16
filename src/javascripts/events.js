document.addEventListener("DOMContentLoaded", () => {
  const layer = document.querySelector("[data-events-modal-layer]");
  const triggers = document.querySelectorAll("[data-event-modal]");

  if (!layer || triggers.length === 0) return;

  const modals = [...layer.querySelectorAll(".O-EventsModal")];
  let activeModal = null;

  const closeModal = () => {
    if (!activeModal) return;

    activeModal.classList.remove("is-open");
    layer.classList.remove("is-open");
    layer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-events-modal-open");

    const modalToHide = activeModal;
    activeModal = null;

    window.setTimeout(() => {
      if (!modalToHide.classList.contains("is-open")) {
        modalToHide.hidden = true;
      }
    }, 260);
  };

  const openModal = (modalId) => {
    const modal = document.getElementById(modalId);

    if (!modal) return;

    modals.forEach((item) => {
      item.hidden = item !== modal;
      item.classList.remove("is-open");
    });

    activeModal = modal;
    modal.hidden = false;
    layer.classList.add("is-open");
    layer.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-events-modal-open");

    requestAnimationFrame(() => {
      modal.classList.add("is-open");
    });
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      openModal(trigger.dataset.eventModal);
    });
  });

  layer.addEventListener("click", (event) => {
    if (
      event.target === layer ||
      event.target.closest("[data-events-modal-close]")
    ) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
});

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    // openModalReadMoreBtn: document.querySelector('[data-modal-read-more-open]'),

    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    // modal: document.querySelector('[data-modal-read-more]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  //   openModalReadMoreBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

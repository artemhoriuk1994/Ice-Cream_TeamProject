(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    // openModalReadMoreBtn: document.querySelector('[data-modal-read-more-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    // modal: document.querySelector('[data-modal-read-more]'),
  };

  const refs2 = {
    openModal2Btn: document.querySelector('[data-modal-2-open]'),
    // openModalReadMoreBtn: document.querySelector('[data-modal-read-more-open]'),
    closeModal2Btn: document.querySelector('[data-modal-2-close]'),
    modal2: document.querySelector('[data-modal-2]'),
    // modal: document.querySelector('[data-modal-read-more]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs2.openModal2Btn.addEventListener('click', toggleModal2);
  //   openModalReadMoreBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs2.closeModal2Btn.addEventListener('click', toggleModal2);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  function toggleModal2() {
    refs2.modal2.classList.toggle('is-hidden');
  }
})();

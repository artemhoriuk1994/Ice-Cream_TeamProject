(() => {
  const refs1 = {
    openModal1Btn: document.querySelector('[data-modal-1-open]'),
    openModal10Btn: document.querySelector('[data-modal-10-open]'),
    closeModal1Btn: document.querySelector('[data-modal-1-close]'),
    modal1: document.querySelector('[data-modal-1]'),
  };

  const refs2 = {
    openModal2Btn: document.querySelector('[data-modal-2-open]'),
    closeModal2Btn: document.querySelector('[data-modal-2-close]'),
    modal2: document.querySelector('[data-modal-2]'),
  };

  const refs3 = {
    openModal3Btn: document.querySelector('[data-modal-3-open]'),
    closeModal3Btn: document.querySelector('[data-modal-3-close]'),
    modal3: document.querySelector('[data-modal-3]'),
  };

  const refs4 = {
    openModal4Btn: document.querySelector('[data-modal-4-open]'),
    closeModal4Btn: document.querySelector('[data-modal-4-close]'),
    modal4: document.querySelector('[data-modal-4]'),
  };

  refs1.openModal1Btn.addEventListener('click', toggleModal1);
  refs1.openModal10Btn.addEventListener('click', toggleModal1);
  refs2.openModal2Btn.addEventListener('click', toggleModal2);
  refs3.openModal3Btn.addEventListener('click', toggleModal3);
  refs4.openModal4Btn.addEventListener('click', toggleModal4);

  refs1.closeModal1Btn.addEventListener('click', toggleModal1);
  refs2.closeModal2Btn.addEventListener('click', toggleModal2);
  refs3.closeModal3Btn.addEventListener('click', toggleModal3);
  refs4.closeModal4Btn.addEventListener('click', toggleModal4);

  function toggleModal1() {
    refs1.modal1.classList.toggle('is-hidden');
  }

  function toggleModal2() {
    refs2.modal2.classList.toggle('is-hidden');
  }

  function toggleModal3() {
    refs3.modal3.classList.toggle('is-hidden');
  }

  function toggleModal4() {
    refs4.modal4.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModBtn: document.querySelector('[data-mod-open]'),
    closeModBtn: document.querySelector('[data-mod-close]'),
    mod: document.querySelector('[data-mod]'),
  };

  refs.openModBtn.addEventListener('click', toggleMod);
  refs.closeModBtn.addEventListener('click', toggleMod);

  function toggleMod() {
    refs.mod.classList.toggle('is-hidden');
  }
})();
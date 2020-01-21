const form = (() => {
  const popUp = () => {
    const projectBtn = document.getElementById('new-project');
    const createForm = document.getElementById('create-form');
    projectBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (createForm.classList.contains('hidden')) {
        createForm.classList.remove('hidden');
        createForm.classList.add('visible');
      } else {
        createForm.classList.remove('visible');
        createForm.classList.add('hidden');
      }
    });
  };
  return { popUp };
})();
export default form;

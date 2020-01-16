const form = (() => {
  const popUp = () => {
    const projectBtn = document.getElementById('new-project');
    const createForm = document.getElementById('create-form');
    projectBtn.addEventListener('click', (e) => {
      e.preventDefault();
      createForm.classList.remove('hidden');
      createForm.classList.add('visible');
      projectBtn.removeEventListener('click', popUp, false);
    });
  };
  return { popUp };
})();
export default form;

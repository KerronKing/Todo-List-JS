import form from './create-form';

const projectBtn = document.getElementById('new-project');
const createForm = document.getElementById('create-form');
projectBtn.addEventListener('click', () => {
  createForm.classList.remove('hidden');
  createForm.classList.add('visible');
  form.newProject();
});
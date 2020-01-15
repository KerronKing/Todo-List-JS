const createForm = (() => {
  const form = document.getElementById('create-form');
  const inputForm = document.createElement('FORM');
  form.appendChild(inputForm);

  const titleInput = document.createElement('INPUT');
  inputForm.appendChild(titleInput);
  titleInput.setAttribute('name', 'title')

  const descriptionInput = document.createElement('INPUT');
  inputForm.appendChild(descriptionInput);
  descriptionInput.setAttribute('name', 'description')

  const dateCreatedInput = document.createElement('INPUT');
  inputForm.appendChild(dateCreatedInput);
  dateCreatedInput.setAttribute('name', 'date-created')

  const dueDateInput = document.createElement('INPUT');
  inputForm.appendChild(dueDateInput);
  dueDateInput.setAttribute('name', 'due-date')

  const priorityInput = document.createElement('INPUT');
  inputForm.appendChild(priorityInput);
  priorityInput.setAttribute('type', 'radio');

  const projectBtn = document.getElementById('new-project');
  projectBtn.addEventListener('click', () => {
    form.classList.remove('hidden');
    form.classList.add('visible');
  })
});

const popUpForm = (() => {
  const projectBtn = document.getElementById('new-project');
  projectBtn.addEventListener('click', () => {
    form.classList.remove('hidden');
    form.classList.add('visible');
    createForm();
  })
});

const form = (() => {
  const newProject = () => {
    const createForm = document.getElementById('create-form');
    createForm.innerHTML = '';
    const projectTitleInputForm = document.createElement('FORM');
    projectTitleInputForm.id = 'project-form';

    const projectTitleInput = document.createElement('INPUT');
    projectTitleInput.setAttribute('name', 'title');
    projectTitleInputForm.appendChild(projectTitleInput);

    const newProjectBtn = document.createElement('BUTTON');
    newProjectBtn.textContent = 'Create';
    newProjectBtn.id = 'project-btn';
    newProjectBtn.setAttribute('type', 'submit');
    projectTitleInputForm.appendChild(newProjectBtn);

    createForm.appendChild(projectTitleInputForm);
  };
  const newToDo = () => {
    const createForm = document.getElementById('create-form');
    createForm.innerHTML = '';
    const inputForm = document.createElement('FORM');
    createForm.appendChild(inputForm);

    const titleInput = document.createElement('INPUT');
    inputForm.appendChild(titleInput);
    titleInput.setAttribute('name', 'title');

    const descriptionInput = document.createElement('INPUT');
    inputForm.appendChild(descriptionInput);
    descriptionInput.setAttribute('name', 'description');

    const dateCreatedInput = document.createElement('INPUT');
    inputForm.appendChild(dateCreatedInput);
    dateCreatedInput.setAttribute('name', 'date-created');

    const dueDateInput = document.createElement('INPUT');
    inputForm.appendChild(dueDateInput);
    dueDateInput.setAttribute('name', 'due-date');

    const priorityInput = document.createElement('INPUT');
    inputForm.appendChild(priorityInput);
    priorityInput.setAttribute('type', 'radio');
  }
  const popUp = () => {
    const projectBtn = document.getElementById('new-project');
    const createForm = document.getElementById('create-form');
    projectBtn.addEventListener('click', (e) => {
      e.preventDefault();
      createForm.classList.remove('hidden');
      createForm.classList.add('visible');
      newProject();
      projectBtn.removeEventListener('click', popUp, false);
    });
  };
  return { newProject, newToDo, popUp };
})();
export default form;

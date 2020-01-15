const form = (() => {

  const newProject = () => {
    const createForm = document.getElementById('create-form');
    const projectTitleInputForm = document.createElement('FORM');
    createForm.appendChild(projectTitleInputForm);

    const projectTitleInput = document.createElement('INPUT');
    projectTitleInput.setAttribute('name', 'project-title');
    projectTitleInputForm.appendChild(projectTitleInput);

    const newProjectBtn = document.createElement('BUTTON');
    newProjectBtn.setAttribute('type', 'submit');
    projectTitleInputForm.appendChild(newProjectBtn);
  };

  const newToDo = () => {
    const createForm = document.getElementById('create-form');
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
  });

  const popUpForm = () => {
    const projectBtn = document.getElementById('new-project');
    const createForm = document.getElementById('create-form');
    projectBtn.addEventListener('click', () => {
      createForm.classList.remove('hidden');
      createForm.classList.add('visible');
      newProject()
      ();
    }
  });
  return { newProject, newToDo, popUpForm };
})();

export default form;

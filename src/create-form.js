const form = (() => {
  const newToDo = () => {
    const todo = document.getElementById('todo-form');
    todo.innerHTML = '';
    const inputForm = document.createElement('FORM');

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

    todo.appendChild(inputForm);
  }
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
  return { newToDo, popUp };
})();
export default form;

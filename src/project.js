import form from './create-form';
const projectsArray = window.localStorage.getItem('projects')
? JSON.parse(window.localStorage.getItem('projects')) : [{ title: 'Sample-Project-1' }];

const projectMethods = (() => {
  const Project = (title) => ({ title });

  const addToArray = (title) => {
    projectsArray.unshift(Project(title));
    window.localStorage.setItem('projects', JSON.stringify(projectsArray));
  };

  const render = (array) => {
    array.forEach(item => {
      const projectArea = document.getElementById('projects');
      const div = document.createElement('DIV');
      div.classList.add('project-entry');
      div.id = `${item.title}`;

      const title = document.createElement('P');
      title.textContent = `${item.title}`;
      div.appendChild(title);

      const todo = document.createElement('BUTTON');
      todo.classList.add('list-entry-btn');
      todo.setAttribute('value', `${item.title}`);
      todo.textContent = '+';
      div.appendChild(todo);

      const deleteBtn = document.createElement('BUTTON');
      deleteBtn.classList.add('delete-entry');
      deleteBtn.textContent = 'Delete';
      div.appendChild(deleteBtn);
      projectArea.appendChild(div);
    })
  };
  const projectSubmission = () => {
    const newProjectBtn = document.getElementById('new-project');
    const projectForm = document.forms['project-form'];
    const createForm = document.getElementById('create-form');

    projectForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(projectForm));
      addToArray(data.title);
      createForm.classList.remove('visible');
      createForm.classList.add('hidden');
      document.location.reload();
      newProjectBtn.addEventListener('click', form.popUp(), false);
      projectForm.reset();
    });
  };
  
  const listBtnListeners = () => {
    const list = document.querySelectorAll('.list-entry-btn');
    const todoEntry = document.getElementById('todo-entry');
    const todoForm = document.getElementById('todo-form');
    list.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        if (todoEntry.classList.contains('hidden')) {
          todoEntry.classList.remove('hidden');
          todoEntry.classList.add('visible');
          const hiddenInput = document.createElement('INPUT');
          hiddenInput.setAttribute('type', 'hidden');
          hiddenInput.setAttribute('value', `${item.value}`);
          hiddenInput.setAttribute('name', 'project');
          todoForm.appendChild(hiddenInput);
        } else {
          todoEntry.classList.remove('visible');
          todoEntry.classList.add('hidden');
          todoForm.removeChild(todoForm.lastChild);
        }
      });
    });
  };
  return { render, projectSubmission, listBtnListeners };
})();
export { projectMethods, projectsArray };

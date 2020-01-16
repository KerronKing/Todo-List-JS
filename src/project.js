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

      const title = document.createElement('P');
      title.textContent = `${item.title}`;
      div.appendChild(title);

      const todo = document.createElement('BUTTON');
      todo.classList.add('list-entry-btn');
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
    const todoForm = document.getElementById('todo-form');
    list.forEach((item) => {
      if (todoForm.classList.contains('hidden')) {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          form.newToDo();
          todoForm.classList.remove('hidden');
          todoForm.classList.add('visible');
        })
      } 
      if (todoForm.classList.contains('visible')) {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          todoForm.classList.remove('visible');
          todoForm.classList.add('hidden');
        })
      }
    })
  }
  return { render, projectSubmission, listBtnListeners };
})();
export { projectMethods, projectsArray };

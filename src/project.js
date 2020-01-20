import form from './create-form';

const projectsArray = window.localStorage.getItem('projects')
  ? JSON.parse(window.localStorage.getItem('projects')) : [{ title: 'Sample-Project-1' }];

const projectMethods = (() => {
  const Project = (title) => { title };

  const addToArray = (title) => {
    projectsArray.push(Project(title));
    window.localStorage.setItem('projects', JSON.stringify(projectsArray));
  };

  const render = (array) => {
    for (let i = array.length - 1; i >= 0; i -= 1) {
      const projectArea = document.getElementById('projects');
      const div = document.createElement('DIV');
      div.classList.add('project-entry');

      const title = document.createElement('H3');
      title.textContent = `${array[i].title}`;
      title.addEventListener('click', (e) => {
        e.preventDefault();
        const todos = document.getElementById(`${array[i].title}`);
        if (todos.classList.contains('hidden')) {
          todos.classList.remove('hidden');
          todos.classList.add('visible');
        } else if (todos.classList.contains('visible')) {
          todos.classList.remove('visible');
          todos.classList.add('hidden');
        }
      });
      div.appendChild(title);

      const todo = document.createElement('BUTTON');
      todo.classList.add('list-entry-btn');
      todo.setAttribute('value', `${array[i].title}`);
      todo.textContent = 'New to-do';
      div.appendChild(todo);

      const deleteBtn = document.createElement('BUTTON');
      deleteBtn.classList.add('delete-entry');
      deleteBtn.textContent = 'Delete';
      div.appendChild(deleteBtn);
      deleteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        deleteBtn.parentElement.remove();
        const deleteItem = JSON.parse(window.localStorage.getItem('projects'));
        deleteItem.splice(i, 1);
        window.localStorage.setItem('projects', JSON.stringify(deleteItem));

        const todos = JSON.parse(window.localStorage.getItem('todo'));
        const newList = todos.filter(todo => todo.project !== `${array[i].title}`);
        window.localStorage.setItem('todo', JSON.stringify(newList));
      });
      const todoHolder = document.createElement('DIV');
      todoHolder.id = `${array[i].title}`;
      todoHolder.classList.add('hidden');
      div.appendChild(todoHolder);
      projectArea.appendChild(div);
    }
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

import form from './create-form';
const projectsArray = [{ title: 'Sample-Project-1' }];

const projectMethods = (() => {
  // const projectsArray = window.localStorage.getItem('projects')
  //   ? JSON.parse(window.localStorage.getItem('projects')) : [];
  //
  // window.localStorage.setItem('projects', JSON.stringify(projectsArray));

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
      newProjectBtn.addEventListener('click', form.popUp(), false);
      projectForm.reset();
    });
  };
  return { render, projectSubmission };
})();
export { projectMethods, projectsArray };

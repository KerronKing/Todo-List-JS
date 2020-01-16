import form from './create-form';

const projectMethods = (() => {
  // const projectsArray = window.localStorage.getItem('projects')
  //   ? JSON.parse(window.localStorage.getItem('projects')) : [];
  //
  // window.localStorage.setItem('projects', JSON.stringify(projectsArray));
  const projectsArray = [{ title: '' }];

  const Project = (title) => ({ title });

  const addToArray = (title) => {
    projectsArray.unshift(Project(title));
    // window.localStorage.setItem('projects', JSON.stringify(projectsArray));
  };

  const render = (array) => {
    array.forEach(item => {
      const projectArea = document.getElementById('projects');
      const div = document.createElement('DIV');
      div.classList.add('project-entry');
      projectArea.appendChild(div);

      const title = document.createElement('P');
      title.textContent = `${item.title}`;
      div.appendChild(title);

      const todo = document.createElement('BUTTON');
      todo.classList.add('list-entry-btn');
      div.appendChild(todo);

      const deleteBtn = document.createElement('BUTTON');
      deleteBtn.classList.add('delete-entry');
      div.appendChild(deleteBtn);
    })
  };
  const projectSubmission = () => {
    const newProjectBtn = document.getElementById('new-project');
    const submitProjectBtn = document.getElementById('submit-project');
    const projectForm = document.forms['project-form'];
    const createForm = document.getElementById('create-form');

    projectForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(projectForm));
      console.log(`${data.title}`);
      console.log(data);
      addToArray(data.title);
      createForm.classList.remove('visible');
      createForm.classList.add('hidden');
      newProjectBtn.addEventListener('click', form.popUp(), false);
      projectForm.reset();
    });
  };
  return { projectsArray, render, projectSubmission };
})();
export default projectMethods;

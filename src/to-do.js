const toDoArray = window.localStorage.getItem('todo')
? JSON.parse(window.localStorage.getItem('todo')) : [];

const todoListMethods = (() => {

  const Todo = (title, description, dateDue, priority, project) => {
    const dateCreated = Date.now();
    return { title, description, dateCreated, dateDue, priority, project };
  }

  const addToDoArray = (title, description, dateCreated,dateDue, priority) => {
    toDoArray.push(Todo(title, description, dateCreated,dateDue, priority));
    window.localStorage.setItem('todo', JSON.stringify(toDoArray));
  };

  const render = (array) => {
    array.forEach((item, i) => {
      const project = document.getElementById(`${item.project}`);
      const mainDiv = document.createElement('DIV');
      mainDiv.id = `todo-${i}`;
      const secondDiv = document.createElement('DIV');
      secondDiv.classList.add('second');
      const thirdDiv = document.createElement('DIV');
      thirdDiv.classList.add('hidden');
      thirdDiv.classList.add('third');

      const title = document.createElement('P');
      title.textContent = `${item.title}`;
      title.addEventListener('click', (e) => {
        e.preventDefault();
        if (thirdDiv.classList.contains('hidden')) {
          thirdDiv.classList.remove('hidden');
          thirdDiv.classList.add('visible');
        } else {
          thirdDiv.classList.remove('visible');
          thirdDiv.classList.add('hidden');
        }
      });
      secondDiv.appendChild(title);

      const priority = document.createElement('DIV');
      priority.classList.add('priority');
      priority.textContent = `${item.priority}`;
      if (priority.textContent == 'high') {
        priority.classList.add('red-text');
      } else if (priority.textContent == 'medium') {
        priority.classList.add('yellow-text');
      } else if (priority.textContent == 'low') {
        priority.classList.add('green-text');
      }
      secondDiv.appendChild(priority);

      const deleteBtn = document.createElement('BUTTON');
      deleteBtn.classList.add('delete-todo');
      deleteBtn.textContent = 'Delete';
      secondDiv.appendChild(deleteBtn);
      deleteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        deleteBtn.parentElement.remove();
        const deleteItem = JSON.parse(window.localStorage.getItem('todo'))
        console.log(deleteItem);
        deleteItem.splice(i, 1);
        window.localStorage.setItem('todo', JSON.stringify(deleteItem));
      });
      const description = document.createElement('P');
      description.textContent = `Description: ${item.description}`;
      thirdDiv.appendChild(description);

      const dateCreated = document.createElement('P');
      dateCreated.textContent = `Date Created: ${item.dateCreated}`;
      thirdDiv.appendChild(dateCreated);

      const dateDue = document.createElement('P');
      dateDue.textContent = `Date due: ${item.dateDue}`;
      thirdDiv.appendChild(dateDue);

      mainDiv.appendChild(secondDiv);
      mainDiv.appendChild(thirdDiv);
      project.appendChild(mainDiv);
    });
  };
  const formListener = () => {
    const todoForm = document.getElementById('todo-form');
    const todoEntry = document.getElementById('todo-entry');
    todoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(todoForm));
      addToDoArray(data.title, data.description, data.dateDue, data.priority, data.project);
      console.log(toDoArray);
      document.location.reload();
      todoEntry.classList.remove('visible');
      todoEntry.classList.add('hidden');
      todoForm.reset();
    });
  };
  return { render, formListener, toDoArray };
})();
export { todoListMethods, toDoArray };

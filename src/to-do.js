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
      mainDiv.classList.add('main');
      mainDiv.id = `todo-${i}`;
      const secondDiv = document.createElement('DIV');
      secondDiv.classList.add('hidden');
      secondDiv.classList.add('second');

      const title = document.createElement('P');
      title.textContent = `${item.title}`;
      mainDiv.appendChild(title);

      const priority = document.createElement('P');
      priority.textContent = `${item.priority}`;
      mainDiv.appendChild(priority);

      const deleteBtn = document.createElement('BUTTON');
      deleteBtn.classList.add('delete-todo');
      deleteBtn.textContent = 'Delete';
      mainDiv.appendChild(deleteBtn);
      deleteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        deleteBtn.parentElement.remove();
        const deleteItem = JSON.parse(window.localStorage.getItem('todo'))
        console.log(deleteItem);
        deleteItem.splice(i, 1);
        window.localStorage.setItem('todo', JSON.stringify(deleteItem));
      })

      const description = document.createElement('P');
      description.textContent = `${item.description}`;
      secondDiv.appendChild(description);

      const dateCreated = document.createElement('P');
      dateCreated.textContent = `${item.dateCreated}`;
      secondDiv.appendChild(dateCreated);

      const dateDue = document.createElement('P');
      dateDue.textContent = `${item.dateDue}`;
      secondDiv.appendChild(dateDue);

      mainDiv.appendChild(secondDiv);
      project.appendChild(mainDiv);
    })
  }
    // if(item.priority.value) == 'high'
    //   toDoArea.classList.add('red');
    // if(item.priority.value) == 'medium'
    //   toDoArea.classList.add('yellow');
    // if(item.priority.value) == 'medium'
    //   toDoArea.classList.add('green');


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
  }
  return { render, formListener, toDoArray };
})();
export { todoListMethods, toDoArray };

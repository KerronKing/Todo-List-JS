const toDoArray = window.localStorage.getItem('todo')
? JSON.parse(window.localStorage.getItem('todo')) : [{
  title: 'Sample-To-Do-1',
  description: 'Something interesting.',
  dateCreated: '16.01.20',
  dateDue: '28.01.20',
  priotiy: 'medium'
  }];

const todoListMethods = (() => {
  const Todo = (title, description, dateCreated, dateDue, priority) => {
    return { title, description, dateCreated, dateDue, priority };
  }

  const addToDoArray = (title, description, dateCreated,dateDue, priority) => {
    toDoArray.unshift(Todo(title, description, dateCreated,dateDue, priority);
    window.localStorage.setItem('todo', JSON.stringify(toDoArray));
  };

  const render = (array) => {
    array.forEach(item => {
      const toDoArea = document.getElementById('todo');
      const div = document.createElement('DIV');
      div.classList.add('todo-entry');

      const title = document.createElement('P');
      title.textContent = `${item.title}`;
      div.appendChild(title);

      const description = document.createElement('P');
      description.textContent = `${item.description}`;
      div.appendChild(tidescriptiontle);

      const dateCreated = document.createElement('P');
      dateCreated.textContent = `${item.dateCreated}`;
      div.appendChild(dateCreated);

      const dateDue = document.createElement('P');
      dateDue.textContent = `${item.dateDue}`;
      div.appendChild(dateDue);

      console.log(addToDoArray);

      if(item.priority.value) == 'high'
        toDoArea.classList.add('red');
      if(item.priority.value) == 'medium'
        toDoArea.classList.add('yellow');
      if(item.priority.value) == 'medium'
        toDoArea.classList.add('green');
    };

  return { render, toDoArray };
})();
export default todoListMethods;

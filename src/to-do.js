const todoListMethods = (() => {
  const toDo = (title, description, dateCreated, dateDue, priority) => {
    return { title, description, dateCreated, dateDue, priority };
  }
  return { toDo };
})();
export default todoListMethods;

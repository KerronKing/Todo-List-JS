const listGen = (() => {
  const project = (title) => {
    return { title };
  }
  const toDo = (title, description, dateCreated, dateDue, priority) => {
    return { title, description, dateCreated, dateDue, priority };
  }
  return { project, toDo };
})();
export default listGen;
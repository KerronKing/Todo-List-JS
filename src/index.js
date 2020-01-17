import form from './create-form';
import { projectMethods, projectsArray } from './project';
import { todoListMethods, toDoArray } from './to-do';
const date = require('date-input-polyfill');
import './styles.css';

form.popUp();
projectMethods.projectSubmission();
console.log(projectsArray);

projectMethods.render(projectsArray);
projectMethods.listBtnListeners();

todoListMethods.formListener();
todoListMethods.render(toDoArray);
// todoListMethods.deleteBtnListener();

console.log(toDoArray);

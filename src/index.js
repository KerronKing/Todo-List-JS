import form from './create-form';
import { projectMethods, projectsArray } from './project';
import { todoListMethods, toDoArray } from './to-do';
import './styles.css';

form.popUp();
projectMethods.projectSubmission();
console.log(projectsArray);
projectMethods.render(projectsArray);
projectMethods.listBtnListeners();
// todoListMethods.render(toDoArray);

console.log(toDoArray);

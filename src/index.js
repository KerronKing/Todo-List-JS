import form from './create-form';
import { projectMethods, projectsArray } from './project';
import { todoListMethods, toDoArray } from './to-do';
const date = require('date-input-polyfill');
import './styles.css';

form.popUp();
projectMethods.projectSubmission();

projectMethods.render(projectsArray);
projectMethods.listBtnListeners();

todoListMethods.formListener();
todoListMethods.render(toDoArray);
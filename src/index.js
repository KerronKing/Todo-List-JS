import form from './create-form';
import { projectMethods, projectsArray } from './project';
import './styles.css';

form.popUp();
projectMethods.projectSubmission();
console.log(projectsArray);
projectMethods.render(projectsArray);

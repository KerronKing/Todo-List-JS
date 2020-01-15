import form from './create-form';
import projectMethods from './project';
import './styles.css';

console.log(projectMethods.projectsArray);
form.popUp();
projectMethods.render(projectMethods.projectsArray);

const projectArea = document.getElementById('projects');
if (projectArea.innerHTML != '') {
  projectMethods.projectSubmission();
}


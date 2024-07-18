import renderDeploymentPage from './pages/renderDeploymentPage';
import './style.css';

const body = document.querySelector('body');
const container = document.createElement('div');
container.id = 'container';
body.append(container);

renderDeploymentPage('container');

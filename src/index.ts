import {PumpalabsApp} from './components/App';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  if (!root) return;
  const app = new PumpalabsApp(root);
  app.mount();
});

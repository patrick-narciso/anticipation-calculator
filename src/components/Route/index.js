import { routes } from '../Route/routes';

const appContent = document.getElementById('app');
appContent.innerHTML = routes[window.location.pathname];

export const onNavigate = pathname => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  appContent.innerHTML = routes[pathname];
};

export function render() {
  window.onpopstate = () => {
    appContent.innerHTML = routes[window.location.pathname];
  };
}

import ReactDOM from 'react-dom/client';
import './global-styles/reset.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {ThemeProvider} from '@material-tailwind/react';
import 'react-loading-skeleton/dist/skeleton.css';
import './global-styles/animations.css';
import './global-styles/global.css';
import App from './App';
import {Provider} from 'react-redux';
import {setupStore} from './store/store';
import {theme} from './global-styles/tailwind-theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const store = setupStore();

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

root.render(
  <Provider store={store}>
    <ThemeProvider value={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
);

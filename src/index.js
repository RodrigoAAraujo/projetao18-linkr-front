import ReactDOM from 'react-dom/client';
import App from './App.js';
import { GlobalProvider } from './components/Global.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalProvider>
        <App />
    </GlobalProvider>
);
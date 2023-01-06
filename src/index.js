import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalProvider } from './components/Global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalProvider>
        <App />
    </GlobalProvider>
);
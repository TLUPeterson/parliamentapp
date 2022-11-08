import * as  React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";


//import rootReducer from 'store/reducers/rootReducer'
import App from './App'
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
	</React.StrictMode>
)
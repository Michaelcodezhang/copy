import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PercentageApp from './PercentageApp'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
ReactDOM.render(<PercentageApp/>,document.getElementById('root'))

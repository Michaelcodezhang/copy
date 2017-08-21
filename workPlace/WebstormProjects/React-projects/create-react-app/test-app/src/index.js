import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock'
import NumberList from './components/NumberList'
import './index.css';

const numbers=[1,2,3,4,5,6,7];

ReactDOM.render(
  <NumberList numbers={numbers}/>,
  document.getElementById('root')
)
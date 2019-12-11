import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import redux from './redux';
import { Provider } from 'react-redux';
import './style/index.less'
ReactDOM.render(<Provider store={　redux }><Router /></Provider>, document.getElementById('root'));

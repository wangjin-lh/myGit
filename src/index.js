import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
//引入ant design mobile全局样式
import 'antd-mobile/dist/antd-mobile.css';
//引入重置样式
import './assets/style/reset.css'
//引入字体
import './assets/font/iconfont.css'
//引入拦截器
import './untils/axiosUtils'
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


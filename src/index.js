import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { applyMiddleware, createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// const myMiddleware = store =>{
//   return next => {
//     return action => {
//       console.log("middleware ran");
//       return next(action);
//     }
//   }
// }

const myMiddleware = store => next => action =>{
  console.log('middleware ran');
  return next(action);
}
const capAtTen = store => next => action =>{
  if(store.getState().counter >= 10){
    return next({type : "DECREMENT"});
  }else{
    return next(action);
  }
}

// const secondMiddleware = store => next => action =>{
//   console.log('second middleware ran');
//   return next(action);
// }

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(myMiddleware, capAtTen, logger)));

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

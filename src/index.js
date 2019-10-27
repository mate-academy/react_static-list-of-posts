import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

const commentsVisible = document.querySelectorAll('.commentsVisible');
const commentsMainDiv = document.querySelectorAll('.comments-main-div');

for (let i = 0; i < commentsVisible.length; i++) {
  commentsVisible[i].addEventListener('click', (e) => {
    if (!e.target.parentNode.classList.contains('commentsVisible')) {
      return
    }
    commentsMainDiv[i].hidden = !commentsMainDiv[i].hidden;
  })
}

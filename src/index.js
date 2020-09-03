import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => (
  button.addEventListener('click', (event) => {
    event.target.nextSibling.classList.toggle('active');
  })
));

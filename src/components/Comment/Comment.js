import React from 'react';
import { CommentShape } from '../../shapes';
import './Comment.css';

export const Comment = ({ name, body, email }) => (
  <div className="App__comment">
    <p>
      <p className="App__commentTitle">
        <i>
          {name}
        </i>
        {', '}
      </p>
      {body}
      <p className="App__commentEmail">
        {email}
      </p>
    </p>
  </div>
);

Comment.propTypes = CommentShape;

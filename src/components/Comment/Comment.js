import React from 'react';
import { TypeOfComment } from '../../types';
import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <div className="comment">
    <p>
      <a href={`mailto:${email}`}>
        {email}
      </a>
    </p>
    <p className="comment__name">{name}</p>
    <p>{body}</p>
  </div>
);

Comment.propTypes = TypeOfComment.isRequired;

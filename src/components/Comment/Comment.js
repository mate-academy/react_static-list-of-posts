import React from 'react';
import './Comment.scss';
import { TypeComment } from '../../types';

export const Comment = ({ name, email, body }) => (
  <div className="Comment">
    <h4 className="Comment__author">
      {`${name} `}
    </h4>
    <a
      href={`mailto:${email}`}
      className="Comment__email"
    >
      {email.toLowerCase()}
    </a>
    <p className="Comment__body">{body}</p>
  </div>
);

Comment.propTypes = TypeComment;

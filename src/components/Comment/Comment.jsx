import React from 'react';
import './Comment.scss';
import { CommentType } from '../Types';

export const Comment = ({ name, body, email }) => (
  <li className="post__item">
    <span className="post__name">
      {name}
    </span>
    <br />
    {body}
    <br />
    <b>
      {`Email: `}
    </b>
    <a href={`mailto:${email}`} className="post__link">
      {email}
    </a>
  </li>
);

Comment.propTypes = CommentType.isRequired;

import React from 'react';
import './Comment.scss';
import { CommentType } from '../../types';

export const Comment = ({ name, body, email }) => (
  <>
    <h4 className="comment__name">{name}</h4>
    <p className="comment__body">{body}</p>
    <a
      className="comment__mail"
      href={`mailto:${email}`}
    >
      {email}
    </a>
  </>
);

Comment.propTypes = CommentType;

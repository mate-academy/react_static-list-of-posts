import React from 'react';

import { CommentType } from '../../Types/types';

import './Comment.scss';

export function Comment(props) {
  const { name, body, email } = props.comment;

  return (
    <li className="comment__item">
      <h4 className="comment__title">
        {name}
      </h4>
      <p className="comment__body">
        {body}
      </p>
      <a
        className="comment__email"
        href={`mailto:${email}`}
      >
        {email}
      </a>
    </li>
  );
}

Comment.propTypes = {
  comment: CommentType.isRequired,
};

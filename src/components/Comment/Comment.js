import React from 'react';
import './Comment.css';
import { CommentsTypes } from '../Shape/CommentsTypes';

export const Comment = (props) => {
  const {
    name,
    body,
    email,
  } = props;

  return (
    <>
      <p className="comments__item comments__item--name">
        {name}
      </p>
      <p className="comments__item comments__item--body">
        {body}
      </p>
      <p className="comments__item comments__item--email">
        <a href="# ">
          {email}
        </a>
      </p>
    </>
  );
};

Comment.propTypes = CommentsTypes;

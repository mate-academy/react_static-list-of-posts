import React from 'react';
import './Comment.css';
import { CommentsTypes } from '../Shape/CommentsTypes';

export const Comment = props => (
  <>
    <p className="comments__item comments__item--name">
      {props.name}
    </p>
    <p className="comments__item comments__item--body">
      {props.body}
    </p>
    <p className="comments__item comments__item--email">
      <a href="# ">
        {props.email}
      </a>
    </p>
  </>
);

Comment.propTypes = CommentsTypes;

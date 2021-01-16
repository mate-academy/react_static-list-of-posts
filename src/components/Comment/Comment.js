import React from 'react';
// import PropTypes from 'prop-types';
import { CommentType } from '../types/types';
import './Comment.scss';

export const Comment = ({ body, email, name }) => (
  <>
    <hr />
    <p>{body}</p>
    <div className="comment__user">
      <span>{name}</span>
      <span>{email}</span>
    </div>
  </>
);

Comment.propTypes = CommentType;

import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import { CommentTypes } from '../../default';
import './CommentList.scss';

export const CommentList = ({ comment }) => (
  <ul className="comment">
    <Comment comments={comment} />
  </ul>
);

CommentList.propTypes = {
  comment: CommentTypes,
}.isRequired;

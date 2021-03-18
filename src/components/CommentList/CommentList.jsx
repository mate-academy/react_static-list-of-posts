import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import { CommentTypes } from '../../default';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <ul className="comment">
    <Comment comments={comments} />
  </ul>
);

CommentList.propTypes = {
  comment: CommentTypes,
}.isRequired;

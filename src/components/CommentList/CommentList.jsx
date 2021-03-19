import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import { CommentTypes } from '../../default';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <>
    {comments.map(comment => (
      <ul
        className="comment"
      >
        <Comment
          name={comment.name}
          body={comment.body}
          email={comment.email}
          id={comment.id}
        />
      </ul>
    ))}
  </>
);

CommentList.propTypes = {
  comment: CommentTypes,
}.isRequired;

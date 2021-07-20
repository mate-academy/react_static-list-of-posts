import React from 'react';
import './CommentList.scss';
import PropTypes from 'prop-types';
import { Comment, TypeComment } from '../Comment';

export const CommentList = ({ comments }) => (
  <ol>
    {comments.map(
      comment => (
        <li key={comment.id}>
          <Comment
            name={comment.name}
            body={comment.body}
            email={comment.email}
          />
        </li>
      ),
    )}
  </ol>
);

export const TypeCommentList = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      ...TypeComment,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

CommentList.propTypes = TypeCommentList;

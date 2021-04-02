import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

export const CommentList = ({ commentList }) => (
  <ul className="comment-list">
    {commentList.map(commentItem => (
      <li className="comment-list__item" key={commentItem.id}>
        <Comment {...commentItem} />
      </li>
    )) }
  </ul>
);

CommentList.propTypes = {
  commentList: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import './CommentList.css';
import { Comment } from '../Comment';

export function CommentList({ commentList }) {
  return (
    <>
      {commentList.map(comment => (
        <li className="comment__item" key={comment.id}>
          <Comment
            name={comment.name}
            body={comment.body}
            email={comment.email}
          />
        </li>
      ))}
    </>
  );
}

CommentList.propTypes = {
  commentList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
};

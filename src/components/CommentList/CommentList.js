import React from 'react';
import './CommentList.css';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';

const CommentList = ({ comments }) => (
  <ul className="CommentList">
    {comments.map(comment => (
      <li className="CommentList__item" key={comment.id}>
        <Comment
          name={comment.name}
          body={comment.body}
          email={comment.email}
        />
      </li>
    ))}
  </ul>
);

export default CommentList;

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
};

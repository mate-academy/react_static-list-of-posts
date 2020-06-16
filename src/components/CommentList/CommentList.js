import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import './CommentList.css';

const CommentList = ({ comments }) => (
  <ul className="post__comments comments">
    {
      comments.length
        ? comments.map(comment => (
          <Comment key={comment.id} {...comment} />
        ))
        : (<span>No comments yet.</span>)
    }
  </ul>
);

export { CommentList };

CommentList.defaultProps = {
  comments: 'No comments yet.',
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
};

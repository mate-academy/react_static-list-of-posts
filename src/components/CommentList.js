import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from './Comment';

import { CommentShape } from './shapes/CommentShape';

export const CommentList = ({ comments, postId }) => (
  <ul
    className="comments accordion px-0"
    id={postId}
  >
    {
      comments.map(comment => (
        <li
          className="
            comments__comment
            card
          "
          style={{ background: '#e9c46a' }}
          key={comment.id}
        >
          <Comment postId={postId} {...comment} />
        </li>
      ))
    }
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(CommentShape).isRequired,
  postId: PropTypes.string.isRequired,
};

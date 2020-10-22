import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from './Comment';

import { CommentTypes } from './PropTypes/CommentTypes';

export const CommentList = ({ comments, postId }) => (
  <section
    className="comments accordion"
    id={postId}
  >
    {
      comments.map(comment => (
        <Comment postId={postId} key={comment.id} {...comment} />
      ))
    }
  </section>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(CommentTypes).isRequired,
  postId: PropTypes.string.isRequired,
};

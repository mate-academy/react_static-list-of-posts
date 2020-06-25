import React from 'react';
import PropType from 'prop-types';
import { Comment } from './Comment/Comment';
import { CommentsShape } from '../../Shapes/CommentsShape';

export const CommentList = ({ comments }) => (
  <div>
    <h2>Comments:</h2>
    {
      comments.map(comment => <Comment key={comment.id} comment={comment} />)
    }
  </div>
);

CommentList.propTypes = {
  comments: PropType.arrayOf(CommentsShape).isRequired,
};

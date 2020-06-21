import React from 'react';
import PropType from 'prop-types';
import { Comment } from './Comment/Comment';

export const CommentList = props => (
  <div>
    <h2>Comments:</h2>
    {[...props.comment]
      .map((comment, index) => <Comment key={comment.id} comment={comment} />)
    }
  </div>
);

CommentList.propTypes = {
  comment: PropType.arrayOf.isRequired,
};

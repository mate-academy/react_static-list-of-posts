import React from 'react';
import { CommentListPropTypes } from './PropTypes';
import { Comment } from './Comment';

export const CommentList = ({ comments }) => (
  <>
    {comments.map(comment => (
      <div key={comment.id}>
        <Comment
          name={comment.name}
          body={comment.body}
          email={comment.email}
        />
      </div>
    ))}
  </>
);

CommentList.propTypes = CommentListPropTypes;

CommentList.defaultProps = {
  comments: [],
};

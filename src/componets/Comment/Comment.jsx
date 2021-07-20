import React from 'react';
import { CommentType } from '../ListTypes';

export const Comment = ({ comment }) => (
  <>
    <p>
      {`Name ${comment.name}`}
    </p>
    <p>
      {` ${comment.body}`}
    </p>
    <p>
      {`Email: ${comment.email}`}
    </p>
  </>
);

Comment.defaultProps = {
  comment: '',
};

Comment.propTypes = {
  comment: CommentType,
};

import React from 'react';
import './CommentList.scss';

export const NoComments: React.FC = () => (
  (
    <>
      <hr />
      <b data-cy="NoCommentsMessage">No comments yet</b>
    </>
  )
);

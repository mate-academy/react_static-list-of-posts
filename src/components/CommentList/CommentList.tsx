import React from 'react';
import './CommentList.scss';

import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (comments.length === 0)
    ? (
      <>
        <hr />

        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    )
    : (
      <div className="CommentList">
        {
          comments.map(comment => (
            <CommentInfo key={comment.id} comment={comment} />
          ))
        }
      </div>
    );
};

import React from 'react';
import './CommentList.scss';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  const neededComments = comments.length !== 0
    ? (
      <div className="CommentList">
        {
          comments
            .map((comment: Comment) => (
              <CommentInfo key={comment.id} comment={comment} />))
        }
      </div>
    )

    : (
      <>
        <hr />
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    );

  return neededComments;
};

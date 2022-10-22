import React from 'react';
import { CommentInfo, CommentInfoProps as Comment } from '../CommentInfo';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.length
      ? (comments.map((comment) => (
        <div className="CommentInfo" key={comment.id}>
          <CommentInfo
            name={comment.name}
            email={comment.email}
            body={comment.body}
            id={0}
          />
        </div>
      )))
      : (<b data-cy="NoCommentsMessage">No comments yet</b>)}
  </div>
);

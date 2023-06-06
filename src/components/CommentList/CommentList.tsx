import React from 'react';
import { Comments } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comments[] | null
};

export const CommentList: React.FC <Props> = ({ comments }) => {
  if (!comments) {
    return (
      <>
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    );
  }

  return (
    <ul className="CommentList">
      {comments.map(comment => (
        <li key={comment.id}>
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  );
};

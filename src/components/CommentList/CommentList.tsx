import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../type/Commet';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  if (comments.length === 0) {
    return (<b data-cy="NoCommentsMessage">No comments yet</b>);
  }

  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo comment={comment} />
      ))}
    </div>
  );
};

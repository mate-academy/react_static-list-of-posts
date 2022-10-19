import React from 'react';
import { Comment } from '../../react-app-env';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <>
      {comments.length
        ? (
          comments.map(comment => (
            <ul className="CommentList">
              <CommentInfo key={comment.id} comment={comment} />
            </ul>
          ))
        )
        : <b data-cy="NoCommentsMessage">No comments yet</b>}
    </>
  );
};

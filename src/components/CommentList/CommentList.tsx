import React from 'react';
import commentsFromServer from '../../api/comments';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../../types/Comment';
import './CommentList.scss';

type Props = {
  postId: number,
};

export const CommentList: React.FC<Props> = ({ postId }) => {
  const found = (element: Comment) => element.postId === postId;

  return (
    <div className="CommentList">
      {commentsFromServer.some(found)
        ? <CommentInfo postId={postId} />
        : <b data-cy="NoCommentsMessage">No comments yet</b>}
    </div>
  );
};

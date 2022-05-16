import React from 'react';
import { CommentsFromServer } from '../../react-app-env';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  commentsList: CommentsFromServer[];
};

export const CommentList: React.FC<Props> = ({ commentsList }) => (
  <ul className="commentList">
    {commentsList.map(commentItem => (
      <CommentInfo comment={commentItem} key={commentItem.id} />
    ))}
  </ul>
);

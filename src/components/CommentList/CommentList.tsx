import React from 'react';
import { CommentFromServer } from '../../react-app-env';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  commentList: CommentFromServer[];
};

export const CommentList: React.FC<Props> = ({ commentList }) => (
  <ul className="commentList">
    {commentList.map(commentItem => (
      <CommentInfo comment={commentItem} key={commentItem.id} />
    ))}
  </ul>
);

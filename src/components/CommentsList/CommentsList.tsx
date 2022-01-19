import React from 'react';
import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  postComments: PostComment[],
};

export const CommentsList: React.FC<Props> = ({ postComments }) => (
  <ul className="comment-list">
    {postComments.map(postComment => (
      <li key={postComment.id}>
        <CommentInfo {...postComment} />
      </li>
    ))}
  </ul>
);

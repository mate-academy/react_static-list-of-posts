import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/comment';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="CommentList">
    {comments.map((
      el: Comment,
    ) => <CommentInfo comment={el} key={el.id} />)}
  </ul>
);

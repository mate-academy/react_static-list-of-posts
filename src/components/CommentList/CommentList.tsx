import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/comment';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    <ul>
      {comments.map((
        el: Comment,
      ) => <li><CommentInfo comment={el} key={el.id} /></li>)}
    </ul>
  </div>
);

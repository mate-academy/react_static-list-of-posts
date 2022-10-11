import { FC } from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Probs = {
  comments: Comment[] | [];
};

export const CommentList: FC<Probs> = ({ comments }) => (
  <ul className="CommentList">
    {comments.map(comment => (
      <li key={comment.id}>
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);

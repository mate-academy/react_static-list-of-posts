import { FC } from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './commentList.scss';

interface Props {
  comments: Comment[]
}

export const CommentList:FC<Props> = ({ comments }) => (
  <>
    <h3>Comments</h3>
    <ul className="comment-list">
      {comments.map(comment => (
        <li className="comment-list__item" key={comment.id}>
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  </>
);

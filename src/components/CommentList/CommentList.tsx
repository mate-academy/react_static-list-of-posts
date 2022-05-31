import React from 'react';
import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../../react-app-env';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    <h2 className="comment">
      Comments
    </h2>
    <ul className="comment__comment-list">
      {comments.map(comment => (
        <li className="comment-list__item" key={comment.id}>
          <CommentInfo comments={comment} />
        </li>
      ))}
    </ul>
  </>
);

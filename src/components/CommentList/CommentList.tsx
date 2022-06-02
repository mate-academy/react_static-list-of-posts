import React from 'react';
import './CommentList.scss';
import { Comment } from '../../react-app-env';
import { CommentInfo } from '../CommentInfo';

interface Props {
  comments: Comment[],
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comments-list">
    {comments.map(comment => (
      <li className="comment" key={comment.id}>
        <CommentInfo
          name={comment.name}
          text={comment.body}
          email={comment.email}
        />
      </li>
    ))}
  </ul>
);

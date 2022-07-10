import React from 'react';
import './CommentList.scss';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments = [] }) => (
  <ul className="comments">
    {
      comments.map(comment => (
        <li
          key={comment.id}
          data-cy="comment-list"
          className="comments__item"
        >
          <CommentInfo
            name={comment.name}
            email={comment.email}
            body={comment.body}
          />
        </li>
      ))
    }
  </ul>
);

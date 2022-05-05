import React from 'react';

import { Comment } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo/CommentInfo';

import './CommentsList.scss';

type Props = {
  comments: Comment[],
};

export const CommentsList: React.FC<Props> = ({ comments }) => (
  <ul className="commentList">
    <p className="commentList__title">Comments:</p>
    {comments
      ? comments.map(comment => (
        <li className="commentList__item" key={comment.id}>
          <CommentInfo comment={comment} />
        </li>
      ))
      : 'No comments yet'}
  </ul>
);

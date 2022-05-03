import React from 'react';

import './CommentList.scss';

import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[] | null,
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comments-list" data-cy="comments-list">
    <h3 className="comments-list__title">Comments:</h3>
    {
      comments
        ? comments.map((comment) => (
          <li className="comments-list__comment" key={comment.id}>
            <CommentInfo
              name={comment.name}
              body={comment.body}
              email={comment.email}
            />
          </li>
        ))
        : 'No comments yet'
    }
  </ul>
);

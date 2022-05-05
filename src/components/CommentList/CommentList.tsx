import React from 'react';
import { Comments } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comments[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="CommentList" data-cy="comments-list">
    Comments:
    {
      comments.map((comment) => (
        <li>
          <CommentInfo
            key={comment.id}
            postId={comment.postId}
            id={comment.id}
            name={comment.name}
            email={comment.email}
            body={comment.body}
          />
        </li>
      ))
    }
  </ul>
);

import React from 'react';
import './CommentList.scss';

import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: PostComment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    <p className="subtitle">Comments:</p>
    <ul>
      {comments.map(comment => (
        <li className="content" key={comment.id}>
          <CommentInfo {...comment} />
        </li>
      ))}
    </ul>
  </>
);

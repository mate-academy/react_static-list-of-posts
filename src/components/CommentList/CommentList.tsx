import React from 'react';
import './CommentList.scss';

import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: PostComment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    <p className="subtitle">Comments:</p>
    {comments.map(comment => (
      <ul className="content" key={comment.id}>
        <CommentInfo {...comment} />
      </ul>
    ))}
  </>
);

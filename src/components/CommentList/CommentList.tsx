import React from 'react';
import { Comment } from '../../react-app-env';
import { CommentInfo } from '../CommentInfo/CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div>
    {comments.map(comment => (
      <div key={comment.id}>
        <CommentInfo
          name={comment.name}
          email={comment.email}
          body={comment.body}
        />
      </div>
    ))}
  </div>
);

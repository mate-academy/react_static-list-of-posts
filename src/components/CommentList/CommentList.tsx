import React from 'react';
import { Comment } from '../../types/Coment';
import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(info => (
      <CommentInfo
        comment={info}
        key={info.id}
      />
    ))}
  </div>
);

import React from 'react';
import './CommentList.scss';
import { Comments } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comments;
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    <CommentInfo
      name={comments.name}
      email={comments.email}
      body={comments.body}
    />
  </div>
);

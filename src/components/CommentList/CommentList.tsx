import React from 'react';
import './CommentList.scss';
import { Comments } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comments[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="CommentList">
    {
      comments.map((comment) => (
        <CommentInfo
          key={comment.id}
          comment={comment}
        />
      ))
    }
  </ul>
);

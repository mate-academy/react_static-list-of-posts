import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="Comments">
    <li><h3 className="Comments__title">Comments:</h3></li>
    {comments
      ? comments.map(comment => (
        <CommentInfo comment={comment} />
      ))
      : <li>No comments...</li>}
  </ul>
);

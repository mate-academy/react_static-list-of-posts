import React from 'react';
import './CommentList.scss';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[] | undefined;
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="commentSection">
    <ul>
      {comments?.map(comment => (
        <li className="commentItem" key={comment.id}>
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  </div>
);

import { FC } from 'react';

import './CommentList.scss';

import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[],
};

export const CommentList: FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {
      comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))
    }
  </div>
);

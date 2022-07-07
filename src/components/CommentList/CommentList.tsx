import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    <h3 className="comment-list__title">COMMENTS</h3>
    {
      comments.map(comment => (
        <CommentInfo comment={comment} />
      ))
    }
  </>
);

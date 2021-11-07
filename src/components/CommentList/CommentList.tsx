import React from 'react';
import './CommentList.scss';
import { CommentType } from '../../types/CommentType';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: CommentType[] | null;
};

export const CommentList:React.FC <Props> = ({ comments }) => (
  <ul className="CommentList">
    { comments
      ? comments.map(comment => (<CommentInfo comment={comment} key={comment.id} />))
      : null }
  </ul>
);

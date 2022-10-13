import React from 'react';
import { Comment } from '../../type/types';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

interface Props {
  comments: Comment[];
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="CommentList">
    {comments.map((text) => {
      const { id } = text;

      return (
        <li key={id}>
          <CommentInfo comment={text} />
        </li>
      );
    })}
  </ul>
);

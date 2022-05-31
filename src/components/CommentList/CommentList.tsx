import React from 'react';
import './CommentList.scss';
import { Comments } from '../../react-app-env';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comments[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="post__list__comments">
    {comments?.map(comment => (
      <li className="post__item__comments" key={comment.id}>
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);

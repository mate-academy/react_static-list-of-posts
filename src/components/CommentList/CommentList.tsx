import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import '../../Comment.scss';

type Props = {
  preparedComments: PostComment[]
};

export const CommentList: React.FC<Props> = ({ preparedComments }) => (
  <ul className="comment comment__list">
    {preparedComments.map(comment => (
      <li className="comment__item" key={comment.id}>
        <CommentInfo {...comment} />
      </li>
    ))}
  </ul>
);

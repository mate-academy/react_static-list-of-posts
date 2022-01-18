import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import '../../Comment.scss';

type Props = {
  preparedComments: PostComment[]
};

export const CommentList: React.FC<Props> = ({ preparedComments }) => (
  <ul className="Comment Comment__list">
    {preparedComments.map(comment => (
      <li className="Comment__item">
        <CommentInfo {...comment} />
      </li>
    ))}
  </ul>
);

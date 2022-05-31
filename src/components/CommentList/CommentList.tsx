import React from 'react';
import './CommentList.scss';
import { Comment } from '../../react-app-env';
import { CommentInfo } from '../CommentInfo/CommentInfo';

interface Props {
  listOfComments: Comment[];
}

export const CommentList: React.FC<Props> = ({ listOfComments }) => (
  <ul className="comments-list">
    {listOfComments.map(commentItem => (
      <li className="comments-list__item" key={commentItem.id}>
        <CommentInfo comment={commentItem} />
      </li>
    ))}
  </ul>
);

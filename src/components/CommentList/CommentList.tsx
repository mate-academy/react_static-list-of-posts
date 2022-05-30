import React from 'react';
import { Comment } from '../../react-app-env';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    <ul className="list">
      {comments.map(coment => (
        <li key={coment.id} className="list__item">
          <CommentInfo coment={coment} />
        </li>
      ))}
    </ul>
  </>
);

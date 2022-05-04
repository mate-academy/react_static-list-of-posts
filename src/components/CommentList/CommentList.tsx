import React from 'react';
import { Comment } from '../../types/Types';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  comment: Comment[],
};

export const CommentList: React.FC<Props> = ({ comment }) => (
  <ul data-cy="comments-list" className="comment__list">
    {
      [...comment].map((note) => (
        <li className="comment__info" key={note.id}>
          <CommentInfo
            note={note}
          />
        </li>
      ))
    }
  </ul>
);

import React from 'react';
import './CommentList.scss';
import { Comments } from '../../Types/Comments';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comments[],
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <ul className="CommentsList" data-cy="comments-list">
      {comments.map(comment => (
        <li className="CommentsList__item" key={comment.id}>
          <CommentInfo
            name={comment.name}
            body={comment.body}
            email={comment.email}
          />
        </li>
      ))}
    </ul>
  );
};

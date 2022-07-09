import React from 'react';
import { Comments } from '../../Type/Comments';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

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

import React from 'react';
import { Comment } from '../../react-app-env';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentsList: React.FC<Props> = (props) => {
  const { comments } = props;

  return (
    <ul className="comments-list">
      {comments.map(comment => (
        <li className="comments-list__item" key={comment.id}>
          <p>
            <CommentInfo comment={comment} />
          </p>
        </li>
      ))}
    </ul>
  );
};

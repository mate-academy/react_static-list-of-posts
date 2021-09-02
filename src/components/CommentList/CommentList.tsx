import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = (props) => {
  const { comments } = props;

  // eslint-disable-next-line no-console
  console.log(comments);

  return (
    <ul className="comment-list">
      {comments.map(comment => (
        <li className="comment-list__item" key={comment.id}>
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  );
};

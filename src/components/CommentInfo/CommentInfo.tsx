import React from 'react';
import './CommentInfo.scss';
import { Comment } from '../../typedefs';

type Props = {
  comment: Comment,
};

export const CommentInfo:React.FC<Props> = ({ comment }) => {
  return (
    <li className="comments--list__item">
      <p>
        <strong>
          Name:
          &nbsp;
        </strong>
        {comment.name}
      </p>
      <p>
        <strong>
          Comment:
          &nbsp;
        </strong>
        {comment.body}
      </p>
      <p>
        <strong>
          Email:
          &nbsp;
        </strong>
        <a className="link" href={`mailto:${comment.email}`}>
          {comment.email}
        </a>
      </p>
    </li>
  );
};

import React from 'react';
import { Comment } from '../../types/Comment';
import './CommentInfo.scss';

type Props = {
  comments: Comment[];
};

export const CommentInfo: React.FC<Props> = (props) => {
  const { comments } = props;

  return (
    <div className="comments">
      <ul className="comments__list">
        {comments.map(({
          id,
          name,
          email,
          body,
        }) => (
          <li key={id} className="comments__item">
            <strong>
              Title:
            </strong>
            {` ${name}`}
            <br />
            <strong>
              Email:
            </strong>
            <span className="comments__email">
              {` ${email}`}
            </span>
            <br />
            <strong>
              Comment:
            </strong>
            {` ${body}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

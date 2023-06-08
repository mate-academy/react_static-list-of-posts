import React from 'react';
import { Comments } from '../../types/Comments';
import './CommentInfo.scss';

type Props = {
  comment: Comments,
};

export const CommentInfo: React.FC <Props> = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <>
      <div className="CommentInfo">
        <div className="CommentInfo__title">
          <strong className="CommentInfo__name">
            {name}
          </strong>

          {' by '}

          <a
            className="CommentInfo__email"
            href={`mailto:${email}`}
          >
            {email}
          </a>
        </div>

        <div className="CommentInfo__body">
          {body}
        </div>
      </div>
    </>
  );
};

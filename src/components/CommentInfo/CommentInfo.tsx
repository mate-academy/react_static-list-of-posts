import React from 'react';
import { Coment } from '../../types/types';

interface Props {
  coment: Coment;
}

export const CommentInfo: React.FC<Props> = ({ coment }) => {
  const {
    name,
    email,
    body,
  } = coment;

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{ name }</strong>

        {' by '}

        <a
          className="CommentInfo__email"
          href={`mailto:${email}`}
        >
          { email }
        </a>
      </div>

      <div className="CommentInfo__body">
        { body }
      </div>
    </div>
  );
};

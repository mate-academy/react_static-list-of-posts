import React from 'react';
import { CommentsFromServer } from '../../react-app-env';
import './CommentInfo.scss';

type Props = {
  comment: CommentsFromServer;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const {
    name,
    email,
    body,
  } = comment;

  return (
    <li className="commentInfoWrapper">
      <h5 className="commentInfoName">
        {`Name of commentator: ${name}`}
      </h5>

      <a
        className="commentInfoEmail"
        href={`mailto:${email}`}
      >
        {`Email: ${email}`}
      </a>

      <p className="commentInfoBody">
        {`Comment: ${body}`}
      </p>
    </li>
  );
};

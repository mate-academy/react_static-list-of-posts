import React from 'react';
import { Comment } from '../../typedefs/Comment';
import '../CommentList/CommentList.scss';

interface Props {
  singleComment: Comment
}

export const CommentInfo: React.FC<Props> = ({ singleComment }) => {
  const {
    body,
    name,
    email,
  } = singleComment;

  return (
    <li className="comment-list__list-item">
      <p className="comment-list__list-item-user-info">
        <span className="post-list__list-item-name">
          {name}
        </span>
        <br />
        <a
          href={`mailto: ${email}`}
          className="comment-list__list-item-email"
        >
          {email}
        </a>
      </p>
      <p className="comment-list__list-item-text">
        {body}
      </p>
    </li>
  );
};

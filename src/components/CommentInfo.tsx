import React from 'react';

import { Comment } from '../types/Comment';
import Image from '../images/user-icon.svg';

type Props = Omit<Comment, 'id'>;

export const CommentInfo: React.FC<Props> = ({ name, body, email }) => (
  <li className="comment">
    <div className="comment__author-info">
      <img
        className="comment__user-img"
        src={Image}
        alt="user"
      />
      <div className="user-header">
        <span className="user-header__author-name">{name}</span>
        <span>{email}</span>
      </div>
    </div>
    <div>{body}</div>
  </li>
);

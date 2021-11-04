import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Post } from '../../types/Post';

import './PostInfo.scss';

export const PostInfo: React.FC<Post> = ({
  title, user, body, comments,
}) => (
  <li className="postInfo">
    <h2>
      {title}
    </h2>
    <h3>
      { (user)
        ? (<UserInfo {...user} />)
        : null }
    </h3>

    <p>
      {body}
    </p>

    { (comments)
      ? comments.map(comment => (
        <CommentInfo {...comment} />))
      : 'Be the first to comment!'}
  </li>
);

import React from 'react';
import './Post.scss';

import { User } from '../User';
import { CommentList } from '../CommentList';
import { PostShape } from '../../shapes/PostShape';

export const Post = ({ title, body, user, comments }) => (
  <li className="post">
    <div>
      <p className="post__title">
        {title}
      </p>
      <p className="post__body">
        {body}
      </p>
      <User {...user} />
    </div>
    <CommentList comments={comments} />
  </li>
);

Post.propTypes = PostShape;

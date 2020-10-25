import React from 'react';
import './Post.scss';
import { User } from '../user';
import { PostShape } from '../shapes/PostShape';
import { CommentList } from '../commentlist';

export const Post = ({ user, title, body, comments }) => (
  <li className="post">
    <div>
      <h2 className="post__title">
        {title}
      </h2>

      <div className="post__info">
        {body}
      </div>

      <div className="post__user">
        <User {...user} />
      </div>
    </div>

    <div>
      <CommentList comments={comments} />
    </div>
  </li>
);

Post.propTypes = PostShape;

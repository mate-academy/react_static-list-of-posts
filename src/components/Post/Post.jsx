import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { User } from '../User/User';
import { PostShape } from '../shapes/PostShape';

import './Post.scss';

export const Post = (props) => {
  const { title, body, user, comments } = props;

  return (
    <li className="post-list__item item">
      <div className="item__user user">
        <User {...user} />
      </div>
      <h2 className="item__title">
        {title}
      </h2>
      <p className="item__body">
        {body}
      </p>
      <ul className="item__comment comment">
        <CommentList comments={comments} />
      </ul>
    </li>
  );
};

Post.propTypes = PostShape;

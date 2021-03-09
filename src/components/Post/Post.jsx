import React from 'react';
import './Post.scss';

import { User } from '../User';
import { TypePosts } from '../../Types/types';

export function Post(props) {
  const { title, body, user, comments } = props.post;

  return (
    <li className="post__item">
      <h2 className="post__title">
        {title}
      </h2>
      <p className="post__body">
        {body}
      </p>
      <User
        user={user}
        comments={comments}
      />
    </li>
  );
}

Post.propTypes = {
  post: TypePosts.isRequired,
};

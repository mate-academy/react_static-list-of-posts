import React from 'react';
import { User } from '../User';
import { PostShape } from '../Shapes/PostShape';

import './Post.scss';

export const Post = ({ id, title, body, user }) => (

  <li className="Post">
    <h1 className="Post__title">
      {title}
    </h1>
    <h2 className="Post__body">
      {body}
    </h2>
    <User {...user} />
  </li>
);

Post.propTypes = PostShape;

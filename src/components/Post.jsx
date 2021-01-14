import React from 'react';
import { User } from './User';

import { TypePost } from '../types';

export const Post = ({ singlePost }) => (
  <li className="list__item">
    <h1 className="list__title">{singlePost.title}</h1>
    <p className="list__text">{singlePost.body}</p>
    <User {...singlePost} />
  </li>
);

Post.propTypes = {
  singlePost: TypePost.isRequired,
};

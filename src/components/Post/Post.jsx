import React from 'react';
import './Post.scss';

import { postPropTypes } from '../TypesOfProp';

export const Post = ({ post }) => {
  const { title, body } = post;

  return (
    <>
      <h2 className="post__title">{title}</h2>
      <p className="post__body"><em>{body}</em></p>
    </>
  );
};

Post.propTypes = postPropTypes;

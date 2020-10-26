import React from 'react';
import './Post.scss';

import { User } from '../User';
import { CommentList } from '../CommentList';
import { PostShape } from '../../propTypes/PostShape';

export const Post = ({ title, body, user, comments }) => (
  <article className="post__item">
    <h2 className="post__title">{title}</h2>
    <p className="post__body">{`"${body}"`}</p>
    <User
      name={user.name}
      email={user.email}
      address={user.address}
    />
    <CommentList comments={comments} />
  </article>
);

Post.propTypes = PostShape.isRequired;

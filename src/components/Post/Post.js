import React from 'react';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import { ShapePost } from '../Shapes';

export const Post = ({ title, body, user, comments }) => (
  <li className="item">
    <h2 className="item__title">
      { title }
    </h2>
    <p className="item__body">
      { body }
    </p>

    <User {...user} />
    <CommentList comments={comments} />

  </li>
);

Post.propTypes = ShapePost.isRequired;

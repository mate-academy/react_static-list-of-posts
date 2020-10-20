import React from 'react';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { postShape } from '../../shapes/postShape';
import './Post.scss';

export const Post = ({ title, body, user, comments }) => (
  <div className="post">
    <div className="post__description">
      <User {...user} />
      <h4 className="post__title">
        {title}
      </h4>
      <p className="post__body">
        {body}
      </p>
    </div>
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = postShape;

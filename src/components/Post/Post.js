import React from 'react';
import { ShapePost } from '../Shapes/ShapePost';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import './Post.css';

// const preparedComments = comments.map(comment => ({
//   ...comment,
// }));

export const Post = ({ title, body, user, comments }) => (
  <div className="post__wrapper">
    <div className="post__item">
      <div className="post__author">
        <img src="/images/user.png" alt="user" className="post__avatar" />
        <User {...user} />
      </div>
      <div className="post__content">
        <h3 className="post__title">
          {title}
        </h3>
        <p className="post__body">
          {body}
        </p>
      </div>
    </div>
    <div className="post__comments">Comments:</div>
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = ShapePost.isRequired;

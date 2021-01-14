import React from 'react';
import { CommentsList } from '../CommentList/CommentList';
import { User } from '../User/User';
import './Post.scss';
import { PostType } from '../Types';

export const Post = ({ body, user, comments, title }) => (
  <div className="post">
    <div className="post__box">
      <h2 className="post__title">{title}</h2>
      <User
        name={user.name}
        email={user.email}
        address={user.address}
      />
      <p className="post__text">
        {body}
      </p>
    </div>
    <div className="post__comments">
      <h3 className="comments__title"> Comments</h3>
      <CommentsList comments={comments} />
    </div>
  </div>
);

Post.propTypes = PostType.isRequired;

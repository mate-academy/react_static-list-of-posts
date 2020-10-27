import React from 'react';
import { CommentList } from './CommentList';
import { User } from './User';
import { PostShape } from '../shapes/PostShape';

export const Post = ({ post }) => {
  const { title, body, user, comments } = post;

  return (
    <div
      className="card bg-light mb-3"
      style={{
        maxWidth: '48rem',
        margin: '0 auto',
      }}
    >

      <div className="cardBody textInfo">
        <div className="card-header">
          Post by
          {user.name}
        </div>
        <h3 className="cardTitle" style={{ textAlign: 'center' }}>
          {title}
        </h3>
        <p className="cardText" style={{ minHeight: '12rem' }}>
          {body}
        </p>
        <User {...user} />
        <CommentList comments={comments} />
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PostShape.isRequired,
};

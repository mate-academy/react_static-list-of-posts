import React from 'react';

import { User } from '../User';
import { CommentList } from '../CommentList';
import { postsType } from '../../Types/postsType';

import './Post.scss';

export const Post = ({ title, body, user, comments }) => {
  const content = body[0].toUpperCase() + body.slice(1);

  return (
    <div className="posts-list__post post">
      <h2 className="post__title">{title}</h2>
      <div className="post__content">
        {content}
        <User {...user} />
      </div>
      <CommentList comments={comments} />
    </div>
  );
};

Post.propTypes = postsType;

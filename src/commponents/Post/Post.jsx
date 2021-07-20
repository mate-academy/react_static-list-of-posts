import React from 'react';

import { CommentList } from '../CommentList';
import { User } from '../User';
import { postType } from '../../Types';

import './Post.scss';

export function Post({ post }) {
  const { title, body, user, commentsForPost } = post;

  return (
    <div className="post">
      <h2 className="post__title">
        {title}
      </h2>

      <p className="post__body">
        {body}
      </p>

      <div className="user post__user">
        <User user={user} />
      </div>

      <div className="comments post__comments">
        <CommentList commentsForPost={commentsForPost} />
      </div>
    </div>
  );
}

Post.propTypes = postType.isRequired;

import React from 'react';
import propTypes from 'prop-types';

import { CommentList } from '../CommentList';
import { User } from '../User';
import { postType, commentType, userType } from '../../Types';

import './Post.scss';

export function Post({ post, comments, users }) {
  const commentsForPost = comments.filter(
    comment => comment.postId === post.id,
  );

  return (
    <div className="post">
      <h2 className="post__title">
        {post.title}
      </h2>

      <p className="post__body">
        {post.body}
      </p>

      <div className="user post__user">
        <User
          userId={post.userId}
          users={users}
        />
      </div>

      <div className="comments post__comments">
        <CommentList commentsForPost={commentsForPost} />
      </div>
    </div>
  );
}

Post.propTypes = {
  post: postType.isRequired,
  comments: propTypes.arrayOf(commentType).isRequired,
  users: propTypes.arrayOf(userType).isRequired,
};

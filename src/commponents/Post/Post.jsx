import React from 'react';
import propTypes from 'prop-types';

import comments from '../../api/comments';

import { CommentList } from '../CommentList';
import { User } from '../User';

import './Post.scss';

export function Post({ post }) {
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
        <User userId={post.userId} />
      </div>

      <div className="comments post__comments">
        <CommentList commentsForPost={commentsForPost} />
      </div>
    </div>
  );
}

export const postType = propTypes.shape({
  userId: propTypes.number.isRequired,
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
});

Post.propTypes = {
  ...postType.isRequired,
};

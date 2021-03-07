import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';

export function Post({
  post,
}) {
  // eslint-disable-next-line react/prop-types
  const pairedCommentsWithPosts = post.comments.filter(comment => (
    comment.postId === post.userId
  ));

  return (
    <>
      <h1>
        {post.title}
      </h1>
      <p>
        {post.body}
      </p>
      <User {...post.user} />
      <CommentList comments={pairedCommentsWithPosts} />
    </>
  );
}

Post.propTypes = {
  post: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      user: PropTypes.shape({}).isRequired,
      pairedCommentsWithPosts: PropTypes.arrayOf(
        PropTypes.shape({}).isRequired,
      ),
    }),
  ).isRequired,
};

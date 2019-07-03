import React from 'react';
import PropTypes from 'prop-types';

import User from './User';
import CommentList from './CommentList';
import comments from '../api/comments';

const PostList = ({ posts }) => (
  <div className="post-list-wrapper">
    {posts.map(post => (
      <article className="post">
        <h2 className="post__title">{ post.title }</h2>

        <User user={post.user} />

        <p className="post__text">{post.body}</p>

        <CommentList
          post={post}
          comments={comments}
        />
      </article>
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;

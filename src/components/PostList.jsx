import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';
import { CommentList } from './CommentList';

export const PostList = ({ posts }) => (
  posts.map(post => (
    <>
      <Post
        key={post.id}
        title={post.title}
        body={post.body}
        user={post.user}
      />
      <div className="card-footer mb-5">
        <CommentList comments={post.comments} />
      </div>
    </>
  ))
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

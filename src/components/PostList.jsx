import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';
import { CommentList } from './CommentList';
import { TypeUser } from '../types';

export const PostList = ({ posts }) => (
  posts.map(post => (
    <React.Fragment key={post.id}>
      <Post
        title={post.title}
        body={post.body}
        user={post.user}
      />
      <div className="card-footer mb-5">
        <CommentList comments={post.comments} />
      </div>
    </React.Fragment>
  ))
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      user: TypeUser.isRequired,
    }),
  ).isRequired,
};

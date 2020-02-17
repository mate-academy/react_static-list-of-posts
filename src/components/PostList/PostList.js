import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { Post } from '../Post/Post';
import { CommentList } from '../CommentList/CommentList';

export const PostList = ({ preparedPosts }) => (
  <div>
    {preparedPosts.map(post => (
      <div key={post.id} className="box">
        <User user={post.user} />
        <Post title={post.title} body={post.body} />
        <CommentList comments={post.comments} />
      </div>
    ))}
  </div>
);

PostList.propTypes = {
  preparedPosts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
      user: PropTypes.object,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          email: PropTypes.string,
          body: PropTypes.string,
        }),
      ),
    }),
  ).isRequired,
};

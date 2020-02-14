import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { Post } from '../Post/Post';
import { CommentList } from '../CommentList/CommentList';

export const PostList = ({ preparedPosts }) => (
  <div>
    {preparedPosts.map(post => (
      <div className="box">
        <User user={post.user} />
        <Post key={post.id} title={post.title} body={post.body} />
        <CommentList comments={post.comment} />
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
      comment: PropTypes.arrayOf(PropTypes.object),
    }),
  ).isRequired,
};

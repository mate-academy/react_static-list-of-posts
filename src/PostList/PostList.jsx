import React from 'react';
import './PostList.scss';
import propTypes from 'prop-types';
import { User } from '../User/User';
import { Post } from '../Post/Post';
import { CommentList } from '../CommentList/CommentList';

export const PostList = ({ posts }) => (
  posts.map(post => (
    <ul className="wrapper" key={post.id}>
      <Post post={post} />
      <User user={post.user} />
      <li>
        <CommentList filteredComments={post.comments} />
      </li>
    </ul>
  ))
);

PostList.propTypes = {
  posts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    }),
  ).isRequired,
};

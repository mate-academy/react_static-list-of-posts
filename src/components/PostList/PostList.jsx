import React from 'react';
import PropTypes from 'prop-types';
import './PostList.scss';
import { Post } from '../Post';
import { User } from '../User';
import { CommentList } from '../CommentList';

export const PostList = ({ fullPosts }) => (
  <ul className="post-list">
    {fullPosts.map(fullPost => (
      <li className="post-list__item" key={fullPost.id}>
        <Post {...fullPost} />
        <User {...fullPost.user} />
        <h3 className="post-list__comment-title">Comments:</h3>
        <CommentList comments={fullPost.comments} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  fullPosts: PropTypes.arrayOf(
    PropTypes.shape(
      PropTypes.objectOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        }),
      ).isRequired,
    ),
  ).isRequired,
};

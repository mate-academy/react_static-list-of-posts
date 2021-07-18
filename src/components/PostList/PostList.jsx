import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';
import { CommentTypes, UserType } from '../../types';
import './PostList.scss';

export const PostList = ({
  postList,
  commentsList,
  usersList,
}) => (
  <ul className="posts-list">
    {postList.map(post => (
      <li className="posts-list__item post" key={post.id}>
        <Post {...post} users={usersList} comments={commentsList} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  postList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  commentsList: PropTypes.arrayOf(CommentTypes).isRequired,
  usersList: PropTypes.arrayOf(UserType).isRequired,
};

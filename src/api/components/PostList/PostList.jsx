import React from 'react';
import PropTypes from 'prop-types';
import { UserType, CommentType } from '../Types';
import { Post } from '../Post';

export const PostList = ({ postsList }) => (
  <ul>
    {postsList.map(post => (
      <li key={post.id}>
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  postsList: PropTypes.arrayOf(PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: UserType.isRequired,
    commentsArr: PropTypes.arrayOf(CommentType).isRequired,
  })).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import { postShape } from '../../shapes/postShape';
import './PostList.scss';

export const PostList = ({ postArray }) => (
  <div className="PostList">
    {postArray.map(post => (
      <Post {...post} key={post.id} />
    ))}
  </div>
);

PostList.propTypes = {
  postArray: PropTypes.arrayOf(postShape).isRequired,
};

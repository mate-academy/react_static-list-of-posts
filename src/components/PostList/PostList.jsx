import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import './PostList.scss';
import { PostType } from '../Types';

export const PostList = ({ dataFromServer }) => (
  <div>
    {
      dataFromServer.map(post => (
        <Post {...post} key={post.id} />
      ))
    }
  </div>

);

PostList.propTypes = {
  dataFromServer: PropTypes.arrayOf(PostType).isRequired,
};

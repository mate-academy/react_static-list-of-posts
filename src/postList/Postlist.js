import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../post/Post';

import { typeMails } from '../types/propTypesCollection';

import '../App.scss';

export const PostList = ({ mails }) => (
  <div className="post-list">
    {mails.map(post => (
      <Post post={post} key={post.id} />
    ))}
  </div>
);

PostList.propTypes = {
  mails: PropTypes.arrayOf(typeMails).isRequired,
};

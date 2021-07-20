import React from 'react';
import List from '@material-ui/core/List';
import { ListItem } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Post } from '../Post';

export const PostList = ({ posts }) => (
  <List className="list">
    {posts.map(post => <ListItem key={post.id}><Post post={post} /></ListItem>)}
  </List>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

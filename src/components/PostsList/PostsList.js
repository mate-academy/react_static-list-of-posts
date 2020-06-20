import React from 'react';
import PropTypes from 'prop-types';
import PostItem from '../PostItem/PostItem';
import './PostsList.css';

const PostsList = props => (
  <ul className="posts">
    {
      props.list.map(post => (
        <PostItem {...post} />
      ))
    }
  </ul>
);

PostsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default PostsList;

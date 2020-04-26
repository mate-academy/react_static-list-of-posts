import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import './PostList.scss';

const PostList = ({ data }) => (
  data.map(item => <Post user={item} key={item.id} />)
);

PostList.propTypes = {
  data: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf.isRequired,
    user: PropTypes.object.isRequired,
  }).isRequired,
};

export default PostList;

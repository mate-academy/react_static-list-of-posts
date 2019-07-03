import React from 'react';
import PropTypes from 'prop-types';

import PostList from './PostList';

const NewPost = props => (
  <div className="post">
    {props.postsList.map(post => <PostList postOfList={post} />)}
  </div>
);

NewPost.propTypes = {
  postsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NewPost;

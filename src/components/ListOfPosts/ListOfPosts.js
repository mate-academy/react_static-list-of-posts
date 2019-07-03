import React from 'react';
import PropTypes from 'prop-types';

import PostItem from '../PostItem/PostItem';

const ListOfPosts = props => (
  <section className="posts-list">
    {
      props.postsList.map(post => <PostItem postItem={post} />)
    }
  </section>
);

ListOfPosts.propTypes = {
  postsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListOfPosts;

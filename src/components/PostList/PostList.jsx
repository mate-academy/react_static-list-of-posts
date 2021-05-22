import React from 'react';
import propTypes from 'prop-types';
import Post from '../Post/Post';

function PostList({ posts }) {
  return (
   <div>
     { 
       posts.map(post => 
         <Post {...post} key={post.id} />)
     }
   </div>
  )
}

PostList.propTypes = {
  posts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

PostList.defaultProps = {
  posts: [],
}

export default PostList;

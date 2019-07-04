import React from 'react';
import PostItem from './PostItem';

const ListOfPosts = props => (
  <div>
    {props.postsList.map(post => <PostItem postItem={post} />)}
  </div>
);

export default ListOfPosts;

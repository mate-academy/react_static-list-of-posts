import React from 'react';
import PostItem from './PostItem';

const ListOfPosts = ({postsList}) => (
  <div>
    {postsList.map(post => <PostItem postItem={post} />)}
  </div>
);

export default ListOfPosts;

import React from 'react';
import PostItem from '../PostItem';

const PostList = ({ post }) => (
  post.map(item => <PostItem key={item.Id} postItem={item} />)
);

export default PostList;

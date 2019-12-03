import React from 'react';
import Post from '../Post';

const PostList = ({posts}) => (
  <div>
    {posts.map(onePost => <Post post={onePost} key={onePost.id} />)}
  </div>
);

export default PostList;

import React from 'react';

import posts from '../api/posts';
import Post from './Post';

const PostList = () => {
  const Posts = posts.map(post => <Post key={post.id} post={post} />);
  return (
    <div className="PostList">
      {Posts}
    </div>
  );
};

export default PostList;

import React from 'react';
import Post from './Post';

function PostList({posts}) {
  // console.log(posts);

  // console.log('-----------------');
  // the name, email, and address of the author of the post;
  return (
    <div>
    {posts.map(post => <Post post={post} />)}
    </div>
  );
}

export default PostList;

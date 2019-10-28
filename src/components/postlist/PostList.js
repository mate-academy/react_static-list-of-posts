import React from 'react';
import Post from '../post/Post';


function PostList({posts}) {
  return (
    <div className="postsEnvironment">
      {
        posts.map(post => (
          <Post
            post={post}
            key={post.id}
          />
        ))
      }
    </div>
  )
}

export default PostList;

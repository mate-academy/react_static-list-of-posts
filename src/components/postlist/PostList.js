import React from 'react';
import Post from '../post/Post';

function PostList(props) {
  return (
    <div className="postsEnvironment">
      {props.posts.map(post => <Post name={post.user.name} title={post.title} body={post.body} comments={post.comments} />)}
    </div>
  )
}


export default PostList;

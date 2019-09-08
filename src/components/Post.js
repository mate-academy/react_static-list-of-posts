import React from 'react';
import UserName from './UserName';
import CommentList from './CommentList';


function Post({post}) {
  // console.log(post);

  return (
    <div style={{border: '1px solid grey', margin: 15}}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      ------------------------------------------------
      <p>{post.user.map(user => <UserName user={user} />)}</p>
      <p><CommentList comments={post.comments} /></p>

    </div>
  );
}

export default Post;

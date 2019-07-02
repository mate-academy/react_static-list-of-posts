import React from 'react';
import Post from './Post';
import users from './users';
import posts from './posts';
import comments from './comments';

function PostList() {
  const postData = posts.map(item => {
    return {
      ...item,
      author: users.find(user => item.userId === user.id),
      commentData: comments.filter(comnt => item.id === comnt.postId)
    };
  });

  return (
    <div >
      {postData.map(item => (
        <Post key={item.id} post={item} />)
      )};
    </div>
  );
}

export default PostList;

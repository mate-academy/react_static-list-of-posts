import React from 'react';
import Post from '../Post/Post';
import './postlist.css';

function Postlist( {posts, comments, users} ) {
  return (
    <div className="post_list">
      {posts.map((post) => {
        const comment = comments.find(com => com.id === post.userId);
        const user = users.find(u => u.id === post.userId);
        return (
          <Post post={post} user={user} comment={comment} />
        );
      })
      }
    </div>
  );
}

export default Postlist;

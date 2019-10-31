import React from 'react';
import './postsList.css';
import posts from '../../api/posts';
import users from '../../api/users';
import comments from '../../api/comments';

import Post from '../Post/Post';
import Comments from '../Comments/Comments';

function getPostsWithUsers() {
  return (
    posts.map(post => (
      <Post
        post={post}
        user={users.find(user => (post.userId === user.id))}
      >
        <Comments commentsList={comments
          .filter(comment => comment.postId === post.id)}
        />
      </Post>
    ))
  );
}

const PostsList = () => (
  <section className="posts">
    {getPostsWithUsers(posts, users, comments)}
  </section>
);

export default PostsList;

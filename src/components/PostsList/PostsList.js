import React from 'react';
import './postsList.css';
import posts from '../../api/posts';
import users from '../../api/users';
import comments from '../../api/comments';

import Post from '../Post/Post';
import Comments from '../Comments/Comments';

function getPostsWithUsers() {
  return posts.map(post => ({
    post,
    user: users.find(user => (post.userId === user.id)),
    commentList: comments.filter(comment => comment.postId === post.id),
  }));
}

function createComponents() {
  return (
    getPostsWithUsers().map(post => (
      <Post
        post={post.post}
        user={post.user}
      >
        <Comments commentsList={post.commentList} />
      </Post>
    ))
  );
}

const PostsList = () => (
  <section className="posts">
    {createComponents(posts, users, comments)}
  </section>
);

export default PostsList;

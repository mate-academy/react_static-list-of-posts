import React from 'react';
import './posts.css';
import posts from '../../api/posts';
import comments from '../../api/comments';
import users from '../../api/users';


const PostsGenerator = () => {
  const postsArr = [];
  let commentsArr = [];

  for (let post of posts) {
    for (let comment of comments) {
      if (comment.postId === post.id) {
        commentsArr.push(
          <p class="comment">{comment.body}</p>,
          <span class="commentator-name">{comment.email}</span>
        )
      }
    }

    for (let user of users) {
      if (post.userId === user.id) {
        postsArr.push(
        <article>
          <h2 class="post-name">{post.title}</h2>
          <p class="post">{post.body}</p>
          <span class="author-name">{user.name}</span>
          <div class="comments">
          <div class="comments-heading">comments</div>
          {commentsArr}
          </div>
        </article>
        )
        commentsArr = [];
      }
    }
  }

  return postsArr;
}

export default PostsGenerator;

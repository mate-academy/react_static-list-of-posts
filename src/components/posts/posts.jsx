import React from 'react';
import posts from '../../api/posts';
import comments from '../../api/comments';
import users from '../../api/users';
import { User } from '../user/user';
import { Comment } from '../comment/comment';

export const Posts = () => (
  posts.map(post => (
    <div className="post">

      <h2 className="title">{post.title}</h2>

      <p className="post__body" key={post.id}>
        {post.body}
      </p>

      <User {...users.find(user => user.id === post.userId)} />

      <ul className="comment">
        {
        comments.filter(comment => comment.postId === post.userId)
          .map(comment => <Comment comment={comment} />)
        }
      </ul>
    </div>
  ))
);

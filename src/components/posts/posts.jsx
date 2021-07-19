import React from 'react';
import posts from '../../api/posts';
import comments from '../../api/comments';
import users from '../../api/users';
import { User } from '../user/user';
import { Comment } from '../comment/comment';

export const Posts = () => (
  posts.map(post => (
    <div className="post" key={post.id}>

      <h2 className="title">{post.title}</h2>

      <p className="post__body">
        {post.body}
      </p>

      <User {...users.find(user => user.id === post.userId)} />

      <ul className="comment">
        {
        comments.filter(comment => comment.postId === post.userId)
          .map(comment => (
            <li className="comment__item" key={comment.id}>
              <Comment comment={comment} />
            </li>
          ))
        }
      </ul>
    </div>
  ))
);

import React from 'react';
import { User } from './User'
import { CommentList } from './CommentList'

export const Post = (post) => (
  <>
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>

    <div className="user">
      <User {...post.user} />
    </div>

    <div>
      <h2 className="comm">COMMENTS</h2>
      <div className="comments">
        {post.comment.map(com => (
          <div key={com.id} className="comment">
            <CommentList {...com} />
          </div>
        ))}
      </div>
    </div>
  </>
);

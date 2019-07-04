import React from 'react';
import comments from '../api/comments';
import CommentList from './CommentList';

function Post( {post} ) {
  return (
    <li className="post">
      <label className="post-name">
        {post.title}
      </label>
      <p className="post-text">
        {post.body}
      </p>
      <ul className="comments">
        {comments
          .filter(comment => comment.postId === post.id)
          .map(commentData => (
            <CommentList comment={commentData} />
          ))}
      </ul>
    </li>
  );
}

export default Post;

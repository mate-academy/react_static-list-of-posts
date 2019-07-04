import React from 'react';
import comments from '../api/comments';
import CommentList from './CommentList';

function Post(props) {
  return (
    <li className="post">
      <label className="post-name">
        {props.post.title}
      </label>
      <p className="post-text">
        {props.post.body}
      </p>
      <ul className="comments">
        {comments
          .filter(comment => comment.postId === props.post.id)
          .map(comment => (
            <CommentList comment={comment} />
          ))}
      </ul>
    </li>
  );
}

export default Post;

import React from 'react';
import Comment from './Comment';
import comments from '../api/comments';

function CommentList({ post }) {
  const postComments = comments.filter(comment => comment.postId === post.id);

  return (
    <div>
      <h3>Comments:</h3>
      {postComments.map(
        comment => <Comment comment={comment} key={comment.id} />
        )
      }
    </div>
  );
}

export default CommentList;

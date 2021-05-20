import React from 'react';
import { Comment } from '../Comment/Comment';
import { ProtoPost } from '../ProtoPost';

export const CommentList = ({ post }) => (
  <div>
    {post.commentList.map(comment => (
      <div className="comment" key={post.id}>
        <Comment comment={comment} />
      </div>
    ))}
  </div>
);

CommentList.propTypes = ProtoPost;

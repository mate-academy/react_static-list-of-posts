import React from 'react';
import { Post } from './types/Post';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="post">
      <h2 className="postTitle">
        {post.title}
      </h2>
      <p className="postBody">
        {post.body}
      </p>
      {post.user && <UserInfo user={post.user} />}
    </div>
    <div className="comments">
      {post.comments && <CommentList comments={post.comments} />}
    </div>
  </>
);

import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type PostInfoProp = {
  post: Post;
};

export const PostInfo: React.FC<PostInfoProp> = ({ post }) => {
  const { user } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
        {user
        && (
          <p>
            {' Posted by ' }
            <UserInfo user={user} />
          </p>
        )}
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      <hr />

      <CommentList comments={post.comments} />
    </div>
  );
};

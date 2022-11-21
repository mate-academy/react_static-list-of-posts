import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by '}

          {post.user ? <UserInfo user={post.user} /> : null}
        </p>
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      <CommentList postId={post.id} />
    </div>
  </>
);

export default PostInfo;

import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      {' Posted by  '}

      {post.user && (
        <UserInfo user={post.user} />
      )}
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <hr />

    <b>
      {post.comments.length
        ? <CommentList comments={post.comments} />
        : 'No comments yet'}
    </b>
  </>
);

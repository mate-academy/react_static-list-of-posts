import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

export interface PostInfoProps {
  post: Post,
}
export const PostInfo: React.FC<PostInfoProps> = ({ post }) => (
  <>
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          {post.user && <UserInfo user={post.user} key={post.user.id} />}
        </p>
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      <hr />

      {post.comments.length === 0
      && <b data-cy="NoCommentsMessage">No comments yet</b>}
      {post.comments && <CommentList comments={post.comments} key={post.id} />}
    </div>
  </>
);

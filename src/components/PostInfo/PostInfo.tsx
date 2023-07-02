import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

type Props = {
  post: Post;
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
  <div className="PostInfo__header">
    <h3 className="PostInfo__title">{post.title}</h3>
    <p>
      {' Posted by '}

      <UserInfo user={ post.user }/>
    </p>
  </div>
  
  <p className="PostInfo__body">
    {post.body}
  </p>

  { post.comments.length ? <CommentList comments={post.comments} /> : (
    <>
      <hr />
      <b data-cy="NoCommentsMessage">No comments yet</b>
    </>
  )}
  
</div>
);

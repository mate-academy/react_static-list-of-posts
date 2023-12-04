import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        {post.user && <UserInfo key={post.id} user={post.user} />}
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />
      {post.comments.length === 0
        ? (<b data-cy="NoCommentsMessage">No comments yet</b>)
        : (<CommentList key={post.id} comments={post.comments} />)}
    </div>
  </>
);

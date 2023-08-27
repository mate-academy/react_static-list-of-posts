import React from 'react';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import { Post } from '../../types/Post';
import './PostInfo.scss';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        <UserInfo user={post.user} />
      </p>
    </div>

    <p className="PostInfo__body">
      est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae
      ea dolores neque fugiat blanditiis voluptate porro vel nihil
      molestiae ut reiciendis qui aperiam non debitis possimus qui neque
      nisi nulla
    </p>

    <hr />
    {post.comments.length > 0
      ? (<CommentList comments={post.comments} />)
      : (<b data-cy="NoCommentsMessage">No comments yet</b>)}
  </div>
);

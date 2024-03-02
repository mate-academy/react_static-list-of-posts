import React from 'react';
import { Post } from '../../types/post';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo: React.FC<Props> = ({ post }: Props) => (
  <div className="PostInfo" key={post.id}>
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        {post.user && <UserInfo user={post.user} />}
      </p>
    </div>

    <p className="PostInfo__body">
      est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea
      dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut
      reiciendis qui aperiam non debitis possimus qui neque nisi nulla
    </p>

    <hr />

    <b data-cy="NoCommentsMessage">No comments yet</b>
  </div>
);

type Props = {
  post: Post;
};

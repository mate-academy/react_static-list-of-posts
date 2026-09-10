import React from 'react';
import { type PreparedPostTypes } from '../PostList/PostList';

export const PostInfo: React.FC = ({ post }: PreparedPostTypes) => {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by '}

          <a className="UserInfo" href="mailto:Sincere@april.biz">
            {post.user.name}
          </a>
        </p>
      </div>

      <p className="PostInfo__body">
        est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea
        dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut
        reiciendis qui aperiam non debitis possimus qui neque nisi nulla
      </p>

      <hr />

      <b data-cy="NoCommentsMessage">{post.comments.body}</b>
    </div>
  );
};
// No comments yet

import React from 'react';
import { UserInfo } from '../UserInfo/';
// import { CommentList } from '../CommentList/';

export const PostInfo: React.FC = () => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">qui est esse</h3>

      <UserInfo />
    </div>

    <p className="PostInfo__body">
      est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae
      ea dolores neque fugiat blanditiis voluptate porro vel nihil
      molestiae ut reiciendis qui aperiam non debitis possimus qui neque
      nisi nulla
    </p>

    {/* <CommentList /> */}

    <hr />

    <b data-cy="NoCommentsMessage">No comments yet</b>
  </div>
);

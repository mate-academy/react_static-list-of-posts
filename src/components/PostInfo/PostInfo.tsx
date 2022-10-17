import React from 'react';
import { CommentList } from '../CommentList';
import { Post } from '../../types/posts';

export const PostInfo: React.FC<Post> = ({
  title, user, body, comments,
}) => (
  <>
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {title}
      </h3>

      <p>
        {user?.username}

        <a className="UserInfo" href="mailto:Julianne.OConner@kory.org">
          {user?.name}
        </a>
      </p>
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    <CommentList comments={comments} />
  </>
);

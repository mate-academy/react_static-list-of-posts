import React from 'react';
import { CommentList } from '../CommentList';
import { Post } from '../../types/posts';

export const PostInfo: React.FC<Post> = ({
  title,
  user,
  body,
  comments,
  id,
}) => {
  const { name, username } = user;

  return (
    <li
      className="PostInfo"
      key={id}
    >
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        <p>
          {username}

          <a className="UserInfo" href="mailto:Julianne.OConner@kory.org">
            {name}
          </a>
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <CommentList comments={comments} />
    </li>
  );
};

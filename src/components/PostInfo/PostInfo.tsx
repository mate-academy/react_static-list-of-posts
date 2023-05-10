import React from 'react';

import './PostInfo.scss';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({
  post: {
    title,
    body,
    user,
  },
}) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      <p>
        {' Posted by  '}
        {user && <UserInfo user={user} key={user.id} />}
      </p>
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    <hr />

    <b data-cy="NoCommentsMessage">No comments yet</b>

    <div className="CommentList">
      <div className="CommentInfo">
        <div className="CommentInfo__title">
          <strong className="CommentInfo__name">pariatur omnis in</strong>

          {' by '}

          <a
            className="CommentInfo__email"
            href="mailto:Telly_Lynch@karl.co.uk"
          >
            Telly_Lynch@karl.co.uk
          </a>
        </div>

        <div className="CommentInfo__body">
          dolorum voluptas laboriosam quisquam ab totam beatae et aut
          aliquid optio assumenda voluptas velit itaque quidem voluptatem
          tempore cupiditate in itaque sit molestiae minus dolores magni
        </div>
      </div>

      <div className="CommentInfo">
        <div className="CommentInfo__title">
          <strong className="CommentInfo__name">
            odio adipisci rerum aut animi
          </strong>

          {' by '}

          <a
            className="CommentInfo__email"
            href="mailto:Nikita@garfield.biz"
          >
            Nikita@garfield.biz
          </a>
        </div>

        <div className="CommentInfo__body">
          quia molestiae reprehenderit quasi aspernatur aut expedita
          occaecati aliquam eveniet laudantium omnis quibusdam delectus
          saepe quia accusamus maiores nam est cum et ducimus et vero
          voluptates excepturi deleniti ratione
        </div>
      </div>
    </div>
  </div>
);

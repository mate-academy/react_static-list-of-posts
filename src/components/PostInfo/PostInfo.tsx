import React from 'react';
import { PreparedPost } from '../../types/preparedPost';

interface Props {
  post: PreparedPost;
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {post.title}
      </h3>

      <p>
        {' Posted by  '}

        <a className="UserInfo" href={`mailto:${post.author?.email || ''}`}>
          {`${post.author?.name || 'Unknown user'}`}
        </a>
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

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
    </div>
  </div>
);

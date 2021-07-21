import React from 'react';
import { PostType } from '../types';
import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = function Post({
  title,
  body,
  user,
  comments,
}) {
  return (
    <div>
      <article>
        <div className="card">
          <div className="card-content">
            <p>
              <User
                user={user}
              />
              <strong>{title}</strong>
              <p>
                {body}
              </p>
            </p>
          </div>
        </div>
        <p className="content">
          <CommentList comments={comments} />
        </p>
      </article>
    </div>
  );
};

Post.propTypes = PostType.isRequired;

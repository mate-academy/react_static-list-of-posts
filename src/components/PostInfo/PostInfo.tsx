import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const [show, setShow] = React.useState(false);

  return (
    <div className="post">
      <h2 data-cy="post-title" className="post__title">
        {post.title}
      </h2>

      <div className="post__user-info">
        {post.user && (
          <UserInfo user={post.user} />
        )}
      </div>

      <p data-cy="post-body" className="post__body">
        {post.body}
      </p>

      <button
        className="post__comments-toggle"
        onClick={() => setShow(!show)}
        type="button"
      >
        {`${show ? 'Hide' : 'Show'} comments (${post.comments.length})`}
      </button>

      {show ? (
        <CommentList comments={post.comments} />
      ) : null}
    </div>
  );
};

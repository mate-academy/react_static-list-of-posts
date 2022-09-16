import React from 'react';
import { PostTodo } from '../../types/PostTodo';
import { CommentList } from '../CommentList';

type Post = {
  postInfoProp: PostTodo,
};

export const PostInfo: React.FC<Post> = ({ postInfoProp }) => (
  <>
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {postInfoProp.post
            ? postInfoProp.post.title
            : ''}
        </h3>

        <p>
          {`Posted by ${postInfoProp.user.username}`}

          <a className="UserInfo" href={postInfoProp.user.email}>
            {` ${postInfoProp.user.name}` }
          </a>
        </p>
      </div>

      <p className="PostInfo__body">
        {postInfoProp.post
          ? postInfoProp.post.body
          : ''}
      </p>

      <hr />

      {postInfoProp.comment
        ? <CommentList comments={postInfoProp.comment} />
        : <b data-cy="NoCommentsMessage">No comments yet</b>}
    </div>
  </>
);

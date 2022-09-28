import React from 'react';
import { PostTodo } from '../../types/PostTodo';
import { CommentList } from '../CommentList';

type PostProps = {
  postInfoProp: PostTodo,
};

export const PostInfo: React.FC<PostProps> = ({ postInfoProp }) => {
  const { post, user, comment } = postInfoProp;

  return (
    <>
      <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">
            {post
              ? post.title
              : ''}
          </h3>

          <p>
            {`Posted by ${user.username}`}

            <a className="UserInfo" href={user.email}>
              {` ${user.name}` }
            </a>
          </p>
        </div>

        <p className="PostInfo__body">
          {post
            ? post.body
            : ''}
        </p>

        <hr />

        {comment
          ? <CommentList comments={comment} />
          : <b data-cy="NoCommentsMessage">No comments yet</b>}
      </div>
    </>
  );
};

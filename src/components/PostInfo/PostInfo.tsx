import React from 'react';
import { Post } from '../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import comments from '../../api/comments';
import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = (props) => {
  const { post } = props;
  const {
    title,
    body,
    user,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <div className="PostInfo__title">
          <strong>{title}</strong>
        </div>
        {user && (<UserInfo user={user} />)}
        <br />
        <div className="PostInfo__body">
          {body}
        </div>
        <br />

        {post.comments.length !== 0
          ? comments && (<CommentList comments={post.comments} />)
          : (
            <div>
              <hr />
              <b data-cy="NoCommentsMessage">No comments yet</b>
            </div>
          )}
      </div>
    </div>
  );
};

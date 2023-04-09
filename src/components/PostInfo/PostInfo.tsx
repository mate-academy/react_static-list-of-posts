import React from 'react';
import './PostInfo.scss';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo/index';
import { CommentList } from '../CommentList/index';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {post.title}
        </h3>

        {
          post.user
          && (
            <p>
              {' Posted by  '}

              <UserInfo user={post.user} key={post.userId} />
            </p>
          )
        }
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      {
        post.comments.length
          ? <CommentList comments={post.comments} />
          : <b data-cy="NoCommentsMessage">No comments yet</b>
      }
    </div>
  </>
);

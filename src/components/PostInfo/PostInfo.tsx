import React from 'react';
import './PostInfo.scss';
import { IPost } from '../../types/Posts';
import { UserInfo } from '../UserInfo';
import { CommentInfo } from '../CommentInfo';

type Props = {
  post: IPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="Post">
      <h3 className="Post__title">Post</h3>
      <div className="Post__user">
        <UserInfo user={post.user} />
      </div>

      <div className="Post__content">
        <div className="Post__title">
          { post.title }
        </div>

        <div className="Post__body">
          { post.body }
        </div>
      </div>

      <div className="Post__comments">
        <h3 className="Post__title">Comments</h3>
        { post.commentList.map(comment => (
          <CommentInfo comment={comment} />
        )) }
      </div>
    </div>
  </>
);

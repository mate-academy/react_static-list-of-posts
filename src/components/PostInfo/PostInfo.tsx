import React from 'react';
import { CommentTypes } from '../../types/commentTypes';
import { PostTypes } from '../../types/postTypes';
import { UserTypes } from '../../types/userTypes';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

interface PostWith extends PostTypes {
  user: UserTypes | null;
  comments: CommentTypes[];
}

type Props = {
  post: PostWith;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        <UserInfo user={post.user} />
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>
    <CommentList comments={post.comments} />
    <hr />
  </>
);

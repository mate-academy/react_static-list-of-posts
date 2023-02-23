import React from 'react';

import { PostTypes } from '../../types/postTypes';
import { UserTypes } from '../../types/userTypes';
import { CommentTypes } from '../../types/commentTypes';
import { PostInfo } from '../PostInfo';

interface PostWithUserAndComments extends PostTypes {
  user: UserTypes | null;
  comments: CommentTypes[];
}

type Props = {
  possts1: PostWithUserAndComments[];
};

export const PostList: React.FC<Props> = ({ possts1 }) => (
  <div className="PostList">
    {possts1.map(post => (
      <div key={post.id} className="PostInfo">
        <PostInfo
          post={post}
        />
      </div>
    ))}
  </div>
);

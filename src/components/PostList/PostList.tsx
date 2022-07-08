import React from 'react';
import { Post } from '../../type/Post';
import { CommentList } from '../CommentList/CommentList';

import { PostInfo } from '../PostInfo/PostInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostList.scss';

type Props = {
  posts: Post[]
};
export const PostList: React.FC<Props> = ({ posts }) => (
  <>
    {posts.map((post) => (
      <div className="card" key={post.id}>
        { post.user && <UserInfo user={post.user} />}
        <PostInfo post={post} />
        <CommentList comments={post.comments} />
      </div>
    ))}
  </>
);

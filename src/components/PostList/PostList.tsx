import React from 'react';
import { PrepearedPost } from '../../types/PrepearedPosts';
import { PostInfo } from '../PostInfo/PostInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostList.scss';

interface Props {
  post: PrepearedPost,
}

export const PostList: React.FC<Props> = ({ post }) => (
  <>
    <PostInfo post={post} />
    {(post.user) && <UserInfo user={post.user} /> }
  </>
);

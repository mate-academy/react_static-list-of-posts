import React from 'react';
import { Post } from '../../types/post';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[];
}

export const PostList: React.FC<Props> = ({posts}) => {
  return (
    <div className="PostList">
      {posts.map((post: Post) => (
        <PostInfo post = {post} key = {post.id} />
      ))}
    </div>
  )
}

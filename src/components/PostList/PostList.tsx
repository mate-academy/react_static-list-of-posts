import React from 'react';
import './PostList.scss';
import { PostsData } from '../../types/PostsData';
import { PostInfo } from '../PostInfo';

interface PostListProps {
  postData: PostsData[];
}

export const PostList: React.FC<PostListProps> = (props) => {
  const { postData } = props;

  return (
    <div className="PostList">
      {postData.map((post) => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};

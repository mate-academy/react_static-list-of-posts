import React from 'react';
import './PostList.scss';
import { PostsData } from '../../types/PostsData';
import { PostInfo } from '../PostInfo';

interface Props {
  postData: PostsData[];
}

export const PostList: React.FC<Props> = (props) => {
  const { postData } = props;

  return (
    <div className="PostList">
      {postData
        && postData.map((post) => (
          <PostInfo post={post} />
        ))}
    </div>
  );
};

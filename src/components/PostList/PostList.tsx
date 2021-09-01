import React from 'react';
import { PreparedPost } from '../../types/PreparedPost';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  postDataList: PreparedPost[];
};

export const PostList: React.FC<Props> = (props) => {
  const { postDataList } = props;

  return (
    <div className="postList">
      {postDataList.map(post => (
        <PostInfo postData={post} />
      ))}
    </div>
  );
};

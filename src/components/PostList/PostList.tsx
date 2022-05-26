import React from 'react';
import PostInfo from '../PostInfo/PostInfo';
import { PreparedPostsType } from '../../types/PreparedPosts';
import './PostList.scss';

interface Props {
  posts: PreparedPostsType[]
}

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => (
        <div key="{post.id}" className="post__item">
          <PostInfo post={post} />
        </div>
      ))}
    </div>
  );
};

export default PostList;

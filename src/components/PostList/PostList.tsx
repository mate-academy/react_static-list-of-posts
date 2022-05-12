import React from 'react';
import { Post } from '../../types/Post';
import PostInfo from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  posts: Post[]
};

const PostList: React.FC<Props> = ({ posts }) => (
  <div className="posts">
    {posts.map(post => (
      <div className="post" key={post.id}>
        <PostInfo
          title={post.title}
          body={post.body}
          user={post.user}
          comment={post.comment}
        />
      </div>
    ))}
  </div>
);

export default PostList;

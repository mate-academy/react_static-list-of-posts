import React from 'react';
import { PostInfo } from '../postInfo/PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = (props) => {
  const { posts } = props;

  return (
    <div className="posts">
      {posts.map((post: Post) => (
        <div className="post__body" key={post.id}>
          <PostInfo post={post} />
        </div>
      ))}
    </div>
  );
};

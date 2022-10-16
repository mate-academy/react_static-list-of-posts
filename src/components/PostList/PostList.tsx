import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';
import commentsFromServer from '../../api/comments';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => {
      const commentsForThisPost = commentsFromServer.filter(
        comment => comment.postId === post.id,
      );

      return (
        <PostInfo post={post} comments={commentsForThisPost} key={post.id} />
      );
    })}
  </div>
);

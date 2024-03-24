import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../types/post';
import { User } from '../../types/user';
import { Comment } from '../../types/comments';

interface PostListProps {
  posts: Post[];
  users: User[];
  comments: Comment[];
}

export const PostList: React.FC<PostListProps> = ({
  posts,
  comments,
  users,
}) => {
  return (
    <div className="PostList">
      {posts.map(post => {
        const userl = users.find(user => user.id === post.id);
        const commentL = comments.filter(comment => comment.postId === post.id);

        return (
          <PostInfo
            key={post.id}
            post={post}
            user={userl}
            comments={commentL}
          />
        );
      })}
    </div>
  );
};

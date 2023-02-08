import React from 'react';
import { Comment } from '../../types/comment';
import { Post } from '../../types/post';
import { User } from '../../types/user';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[],
  comments: Comment[],
  users: User[]
};

export const PostList: React.FC<Props> = ({ posts, comments, users }) => (
  <div className="PostList">
    {posts
      .map((el: Post) => (
        <PostInfo
          post={el}
          comments={comments
            .filter((comment: Comment) => comment.postId === el.id)}
          user={users.filter((user:User) => user.id === el.userId)[0]}
        />
      ))}
  </div>
);

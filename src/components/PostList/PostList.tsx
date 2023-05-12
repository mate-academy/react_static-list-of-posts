import React from 'react';

import { PostInfo } from '../PostInfo';
import { Post } from '../../types/Post';
import { User } from '../../types/User';
import { Comment } from '../../types/Comment';

type Props = {
  posts: Post[],
  comments: Comment[],
  users: User[],
};

export const PostList: React.FC<Props> = ({
  posts,
  users,
  comments,
}) => (
  <div className="PostList">
    {posts.map(postItem => {
      const user = users.find(
        person => person.id === postItem.userId,
      );

      const postComments = comments.filter(item => postItem.id === item.postId);

      if (!user) {
        return null;
      }

      const postWithComments = {
        ...postItem,
        user,
        comments: postComments,
      };

      return (
        <div className="PostInfo" key={postItem.id}>
          <PostInfo post={postWithComments} />
        </div>
      );
    })}
  </div>
);

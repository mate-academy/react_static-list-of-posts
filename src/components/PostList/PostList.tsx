import React from 'react';
import { Post } from '../../types/posts';
import { PostInfo } from '../PostInfo';
import usersFromServer from '../../api/users';
import commentsFromServer from '../../api/comments';

interface PostListProps {
  postsFromServer: Post[];
}

export const PostList: React.FC<PostListProps> = ({ postsFromServer }) => (
  <>
    {postsFromServer.map((post) => {
      const user = usersFromServer.find((person) => person.id === post.userId);
      const postcomments = commentsFromServer
        .filter((comment) => comment.postId === post.id);

      return (
        <PostInfo post={post} user={user} postComments={postcomments} />
      );
    })}
  </>
);

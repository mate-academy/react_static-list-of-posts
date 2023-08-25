import React from 'react';
import { User } from '../../types/User';
import usersFromServer from '../../api/users';
import postsFromServer from '../../api/posts';

interface UserInfoProps {
  user: User;
}

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);

export const PostWithUserInfo: React.FC<{ postId: number }> = ({ postId }) => {
  const post = postsFromServer.find((postEx) => postEx.id === postId);
  const user = usersFromServer.find((userEx) => userEx.id === post?.userId);

  if (!post || !user) {
    return null;
  }

  return (
    <div>
      <h2>Post Information:</h2>
      <div>
        <strong>User Name:</strong>
        <UserInfo user={user} />
      </div>
      <div>
        <strong>Post Title:</strong>
        {post.title}
      </div>
      <div>
        <strong>Post Body:</strong>
        {post.body}
      </div>
    </div>
  );
};

import React from 'react';
import { CommentInfo } from './CommentInfo';
import { PostInfo } from './PostInfo';
import { UserInfo } from './UserInfo';

type Prop = {
  posts: PrepearedPostCommentsUser[],
};

export const PostList: React.FC<Prop> = (props) => {
  const { posts } = props;

  return (
    <ul>
      {posts.map(post => (
        <li>
          <br />
          <p>
            <UserInfo users={post} />
          </p>
          <hr />
          <p>
            <PostInfo post={post} />
          </p>
          <hr />
          <p>
            <CommentInfo comments={post} />
          </p>
          <hr />
          <hr />
        </li>
      ))}
    </ul>
  );
};

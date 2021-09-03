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
      {posts.map(x => (
        <li>
          <br />
          <p>
            <UserInfo users={x} />
          </p>
          <hr />
          <p>
            <PostInfo post={x} />
          </p>
          <hr />
          <p>
            <CommentInfo comments={x} />
          </p>
          <hr />
          <hr />
        </li>
      ))}
    </ul>
  );
};

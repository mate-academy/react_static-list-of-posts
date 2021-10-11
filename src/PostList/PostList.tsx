import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';

import { Comment } from '../types/Comment';
import { User } from '../types/User';
import { Post } from '../types/Post';

type PreparedPosts = {
  user: User | null,
  comments: Comment[],
  post: Post
};

type Props = {
  postList: PreparedPosts[]
};

export const PostList:React.FC<Props> = (props) => {
  const { postList } = props;

  return (
    <section>
      <PostInfo posts={postList} />
    </section>
  );
};

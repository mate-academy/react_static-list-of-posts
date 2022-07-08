import React from 'react';

import 'bulma/css/bulma.min.css';
import { Box, Block, Heading } from 'react-bulma-components';

import { CommentList } from '../CommentList/CommentList';
import { Comment } from '../CommentInfo/CommentInfo';
import { UserInfo, User } from '../UserInfo/UserInfo';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User | undefined,
  comments: Comment [],
}

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  return (
    <Box data-cy="post-info">
      <Heading subtitle weight="bold" size={5} data-cy="post-title">
        {post.title}
      </Heading>
      <Block data-cy="post-body">
        {post.body}
      </Block>
      {post.user ? <UserInfo user={post.user} /> : 'no user'}
      <CommentList comments={post.comments} />
    </Box>
  );
};

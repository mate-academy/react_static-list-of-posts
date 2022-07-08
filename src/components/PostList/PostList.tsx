import React from 'react';

import 'bulma/css/bulma.min.css';
import { Box } from 'react-bulma-components';

import { PostInfo, Post } from '../PostInfo/PostInfo';

type Props = {
  posts: Post [];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <Box className="">
      {posts.map(post => {
        return (
          <PostInfo post={post} key={post.id} />
        );
      })}

    </Box>
  );
};

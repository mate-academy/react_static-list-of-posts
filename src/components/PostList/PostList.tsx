import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../types/post';

import './PostList.scss';

type Props = {
  data: Post[]
};

export const PostList: React.FC<Props> = ({ data }) => (
  <section className="postList">
    {data.map((post: Post) => (
      <article className="postList__item" key={post.id}>
        <PostInfo post={post} />
      </article>
    ))}
  </section>
);

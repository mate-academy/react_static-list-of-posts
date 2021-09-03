import React from 'react';
import { Post } from '../../react-app-env';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = (props) => {
  const { posts } = props;

  return (
    <section className="content">
      <ul className="list">
        {
          posts.map(post => (
            <li className="list__item" key={post.id}>
              <PostInfo post={post} />
            </li>
          ))
        }
      </ul>
    </section>
  );
};

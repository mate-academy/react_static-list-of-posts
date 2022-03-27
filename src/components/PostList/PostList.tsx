import { FC } from 'react';
import { FullPost } from '../types/Posts';
import { PostInfo } from '../postInfo/PostInfo';

interface Props {
  posts: FullPost[];
}

export const PostList: FC<Props> = ({ posts }) => (
  <div className="posts">
    <ul className="posts_list">
      {
        posts.map(post => (
          <li className="posts_item" key={post.id}>
            <PostInfo post={post} />
          </li>
        ))
      }
    </ul>
  </div>
);

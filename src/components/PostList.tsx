import { Post } from '../types/Post';
import { PostInfo } from './PostInfo';
import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <article className="PostList__item" key={post.id}>
        <PostInfo post={post} />
      </article>
    ))}
  </div>
);

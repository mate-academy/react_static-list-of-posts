import { PostInfo } from '../PostInfo';

type Props = {
  preparedPosts: Post[];
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul className="post">
    {preparedPosts.map(post => (
      <li className="post__list" key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);

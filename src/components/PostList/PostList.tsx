import { Post } from '../../types/Post';

import { PostInfo } from '../PostInfo';

type Props = {
  listOfPosts: Post[];
};

export const PostList: React.FC<Props> = ({ listOfPosts }) => (
  <div className="PostList">
    {listOfPosts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);

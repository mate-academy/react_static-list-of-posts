import { PostInfo } from '../PostInfo';
import { Posts } from '../../types/postsAll';

type Props = {
  posts: Posts[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <>
    <div className="PostList">
      {
        posts.map(postItem => (
          <PostInfo post={postItem} key={postItem.id} />
        ))
      }
    </div>
  </>
);

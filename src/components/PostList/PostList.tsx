import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';
import { Comment } from '../../types/Comment';

export type PostListProps = {
  posts: Post[],
  comments: Comment[];
};

export const PostList: React.FC<PostListProps> = ({ posts, comments }) => {
  return (
    <div className="PostList">
      {posts.map(
        post => {
          const postComments = comments.filter(
            comment => comment.post && comment.post.id === post.id,
          );

          const postProps = {
            ...post,
            comments: postComments,
          };

          return (
            <PostInfo post={postProps} key={post.id} />
          );
        },
      )}
    </div>
  );
};

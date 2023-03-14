import posts from '../../api/posts';
import users from '../../api/users';
import comments from '../../api/comments';
import { User } from '../../types/Users';
import { CopyPost } from '../../types/CopyPost';
import { Comment } from '../../types/Comments';

function addUserData(): CopyPost[] {
  return posts.map((post) => {
    const userFind: User = users
      .find((user) => user.id === post.userId) as User;
    const postComments = comments
      .filter((comment) => comment.postId === post.id) as Comment[];

    const copyPost: CopyPost = {
      ...post,
      user: userFind as User,
      comments: postComments as Comment[],
    };

    return copyPost;
  });
}

export const copyPosts = addUserData();

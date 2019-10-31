import posts from '../api/posts';
import comments from '../api/comments';
import users from '../api/users';

const usersWithPosts = posts.map(post => ({
  ...post,
  userId: users.find(user => user.id === post.userId),
}));

const unionList = usersWithPosts.map(elem => ({
  ...elem,
  postComments: comments.filter(comment => comment.postId === elem.id),
}));

export default unionList;

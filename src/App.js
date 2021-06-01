import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { PostList } from './component/postlist';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const fullPosts = initFullPosts(posts, comments, users);
const App = () => (
  <React.Fragment>
    <CssBaseline />
    <AppBar align="center">
      <Typography variant="h6">
        News feed
      </Typography>
    </AppBar>
    <Toolbar />
    <Container>
      <Box>
        <PostList list={fullPosts} />
      </Box>
    </Container>
  </React.Fragment>
);

export default App;

function initFullPosts(rawPosts, allComments, allUsers) {
  return rawPosts.map((post) => {
    const author = allUsers.find(user => user.id === post.userId);
    const postWithAuthor = {
      ...post,
      author,
      comments: allComments.filter(comment => comment.postId === post.id),
    };

    return postWithAuthor;
  });
}

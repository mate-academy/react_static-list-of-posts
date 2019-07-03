import React from 'react';

import '../styles/App.css';

import posts from '../api/posts';
import comments from '../api/comments';
import users from '../api/users';

import Post from './Post';
import CounterCMNTs from './CounterCMNTs';
import Comments from './comments';

const pucs = posts.map((post) => {
  return {
    ...post,
    user: users.find(user => user.id === post.userId),
    cmnts: comments.filter(comment => comment.postId === post.id),
  };
});

const App = () => (
  <div className="App">

    <h3>
      Once upon a time in a very ancient<br />
      and extremely outdated forum <br />
      that no one has visited for decades ...<br />
      or even centuries...
    </h3>

    {pucs.map(puc => (
      <>
        <Post
          name={puc.user.name}
          email={puc.user.email}
          address={puc.user.address}
          title={puc.title}
          body={puc.body}
        />

        <CounterCMNTs counter={puc.cmnts.length} />

        <Comments cmnt={puc.cmnts} />
      </>
    ))}

  </div>
);

export default App;

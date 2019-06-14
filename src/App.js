import React, { Component } from 'react';
import './App.css';
import PostList from './components/PostList/PostList';
import { posts } from'./Data/posts';
import { comments } from './Data/comments';
import { users } from './Data/users';

class App extends Component {
  constructor(props) {
    super(props);
    const usersById = users.reduce(
      (
        users,
        { id,
          name,
          email,
          address: {
            city,
            street,
            suite
          }
        }
      ) => (
        {
          ...users,
          [id]: {
            id,
            name,
            email,
            address: `${city}, ${street}, ${suite}`
          }
        }
      ),
      {}
    );

    const commentsMapped = comments.reduce(
      (acc, comment) => (
        acc.hasOwnProperty(comment.postId)
          ? {
            ...acc,
            [comment.postId]: [ ...acc[comment.postId], comment ]
          } : {
            ...acc,
            [comment.postId]: [ comment ]
          }
        )
      , {}
    );

    this.state = {
      postList: posts.map(
        ({ userId, id, title, body }) => ({
          id,
          title,
          body,
          user: usersById[userId],
          comments: commentsMapped.hasOwnProperty(id)
            ? commentsMapped[id]
            : null
        })
      )
    }
  }

  render () {
    return (
      <div className="App">
        <h1>List of post</h1>
        <PostList postList={this.state.postList} />
      </div>
    );
  }
}

export default App;

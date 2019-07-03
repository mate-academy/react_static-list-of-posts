import React from 'react';

import './App.css';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import Comments from './components/Comments';
import Posts from './components/Posts';
import Users from './components/Users';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.setState({
      posts: this.getFullPost(postsFromServer, commentsFromServer, usersFromServer),
    });
  }

  getFullPost(posts, comments, users) {
    return posts.map(post => ({
      ...post,
      comments: comments.filter(comment => comment.postId === post.id),
      user: users.find(user => user.id === post.userId),
    }));
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="PostList">
        <h1>Statick Post List</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Posts post={post}/>
              <Users post={post}/>
              <Comments post={post} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;

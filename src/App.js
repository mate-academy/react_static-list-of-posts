import React from 'react';
import './App.css';
import PostList from './components/PostList';
import {posts} from './posts';
import {users} from './users';
import  {comments} from "./comments";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      postItems: []
    };
  }

  componentDidMount() {
    this.setState({
      posts: this.getPostsWithUsersAndComments(posts, users, comments),
      postItems: this.getPostsId(posts)
    });
  }

  getPostsId(posts) {
    return posts.map(post => ({
      'post[id]': false
    }))
  }

  getPostsWithUsersAndComments(posts, users, comments) {
    return posts.map(post => ({
      ...post,
      title: post.title[0].toUpperCase() + post.title.slice(1),
      body: post.body[0].toUpperCase() + post.body.slice(1),
      user: users.find(user => user.id === post.userId),
      comments: comments.filter(comment => comment.postId === post.id)
    }))
  }

  showComments = (postId) => {
    this.setState(prevState => {
      const copyPostItems = {...prevState.postItems};
      copyPostItems[postId] = !copyPostItems[postId];

      return { postItems:copyPostItems };
    })
  }

  render() {
    return (
      <section className="section-wrap">
        <h1>React static list of posts</h1>
        <PostList
          posts={this.state.posts}
          postItems={this.state.postItems}
          showComments={this.showComments}
        />
      </section>
    );
  }
}

export default App;

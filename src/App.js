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
      posts: this.getPostsWithUsersAndComments(posts, users, comments)
    });
  }

  getPostsWithUsersAndComments(posts, users, comments) {
    return posts.map(post => ({
      ...post,
      title: this.convertFirstLetterToUpperCase(post.title),
      body: this.convertFirstLetterToUpperCase(post.body),
      user: users.find(user => user.id === post.userId),
      comments: comments.filter(comment => comment.postId === post.id)
    }))
  }

  convertFirstLetterToUpperCase(str) {
    return str[0].toUpperCase() + str.slice(1);
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
        <h1>React dynamic list of posts</h1>
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

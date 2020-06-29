import React from 'react';
import Container from 'react-bootstrap/Container';

import { PostList } from './components/PostList/PostList';
import { Counters } from './components/Counters/Counters';

import './App.css';
import { preparedPosts } from './components/Post/PostData';

class App extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.setState({
      loading: false,
    });
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return null;
    }

    return (
      <Container className="App">
        <h1>Static list of posts</h1>
        <Counters />
        <PostList posts={preparedPosts} />
      </Container>
    );
  }
}

export default App;

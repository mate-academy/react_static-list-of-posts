import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';

export class PostList extends React.Component {
  state = {
    list: [],
  }

  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      userId: PropTypes.number,
    })),
    users: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
    })),
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      postId: PropTypes.number,
    })),
  }

  static defaultProps = {
    posts: [],
    users: [],
    comments: [],
  }

  componentDidMount() {
    this.setState({
      list: this.props.posts.map((post) => {
        const newPost = post;

        newPost.comments = this.props.comments.filter(
          comment => comment.postId === post.id,
        );
        newPost.user = this.props.users.find(
          user => post.userId === user.id,
        );

        return newPost;
      }),
    });
  }

  render() {
    const { list } = this.state;

    return (
      <div className="postList">
        <h1 style={{ marginBottom: 0 }}>Posts:</h1>
        {list.map(post => <Post {...post} key={post.id} />)}
      </div>
    );
  }
}

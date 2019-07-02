import React from "react";

import Post from "./Post";
import User from "./User";
import CommentList from "./CommentList";

class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: this.props.posts,
      comments: this.props.comments,
      sortField: "title"
    };

    this.handleSort = sortField => {
      this.setState({ sortField });
    };
  }

  sortPosts(posts, sortField) {
    const callbackMap = {
      title: (a, b) => a.title.localeCompare(b.title),
      body: (a, b) => a.body.localeCompare(b.body)
    };

    const callback = callbackMap[sortField] || callbackMap.title;

    return posts.sort(callback);
  }

  findUser = userId => {
    return this.props.users.find(user => user.id === userId);
  };

  findComments = postId => {
    return this.props.comments.filter(comment => comment.postId === postId);
  };

  render() {
    const { posts, sortField } = this.state;
    const sortedPosts = this.sortPosts(posts, sortField);
    return (
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => this.handleSort("title")}>Post Title</th>
            <th onClick={() => this.handleSort("body")}>Post Body</th>
            <th>Authors data</th>
            <th>Comment list</th>
          </tr>
        </thead>
        <tbody>
          {sortedPosts.map(post => (
            <tr>
              <Post key={post.id} post={post} />
              <User user={this.findUser(post.userId)} />
              <CommentList
                postId={post.id}
                comments={this.findComments(post.id)}
              />
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default PostList;

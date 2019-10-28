import React from 'react';
import { Card, Comment, Header, Image, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import PostComment from '../comment/Comment';

const Post = ({ postTitle, postText, userName, postComments }) => (
  <div className="post">
    <Card>
      <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>{postTitle}</Card.Header>
        <Card.Description>{postText}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          {userName}
        </a>
        <Comment.Group>
          <Header as="h3" dividing>
            Comments
          </Header>
          {postComments.map(comment => (
            <PostComment
              commentText={comment.body}
              userName={comment.email}
            />
          ))}
        </Comment.Group>
      </Card.Content>
    </Card>
  </div>
);

Post.propTypes = {
  postTitle: PropTypes.string.isRequired,
  postText: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  postComments: PropTypes.array.isRequired,
};

export default Post;

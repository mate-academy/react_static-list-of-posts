import React from 'react';
import PropTypes from 'prop-types';
import { Item, Segment } from 'semantic-ui-react';
import User from './User';
import CommentList from './CommentList';

const Post = ({ id, title, body, user, cmts }) => (
  <Segment.Group raised>
    <Item.Group>
      <Item>
        <Item.Image
          size="tiny"
          src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
        />
        <Item.Content>
          <Item.Header as="h3" style={{ textTransform: 'capitalize' }}>
            {`Post ${id}. ${title}`}
          </Item.Header>
          <Item.Meta>
            <User {...user} />
          </Item.Meta>
          <Item.Description content={body} />
          <Item.Extra>
            <CommentList cmts={cmts} />
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  </Segment.Group>
);

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ).isRequired,
  cmts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Post;

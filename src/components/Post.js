import React from 'react';
import PropTypes from 'prop-types';
import { Item, Segment } from 'semantic-ui-react';
import User from './User';
import CommentList from './CommentList';

const Post = ({ title, body, user, cmts }) => (
  <Segment raised color="blue" className="post">
    <Item.Group>
      <Item>
        <Item.Image
          size="tiny"
          src={user.photo || 'img/noavatar.png'}
        />
        <Item.Content>
          <Item.Header as="h2" className="post__title" title={title}>
            {title}
          </Item.Header>
          <Item.Meta>
            <User {...user} cmtsId={cmts[cmts.length - 1].id} />
          </Item.Meta>
          <Item.Description className="post__text" content={body} />
          <Item.Extra>
            <CommentList cmts={cmts} />
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  </Segment>
);

Post.propTypes = {
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

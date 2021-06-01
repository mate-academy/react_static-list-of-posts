import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import PropTypes from 'prop-types';
import { Comment } from '../comment';
import { CommentType } from '../comment/CommentType';

export const CommentSection = ({ commentList }) => {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.tree}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <TreeItem
        nodeId="1"
        label="Comment section"
      >
        {commentList.map(comment => (
          <Comment
            key={`${comment.id}`}
            {...comment}
          />
        ))}
      </TreeItem>
    </TreeView>
  );
};

CommentSection.propTypes = {
  commentList: PropTypes.arrayOf(CommentType),
};

CommentSection.defaultProps = {
  commentList: [],
};

const useStyles = makeStyles({
  tree: {
    height: 'auto',
    flexGrow: 10,
    maxWidth: 'inherit',
  },
});

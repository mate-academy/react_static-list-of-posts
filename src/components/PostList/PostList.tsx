/* eslint-disable import/no-cycle */
import { PreparedPosts } from '../../App';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  props: PreparedPosts [];
};

export const PostList: React.FC<Props> = ({ props }) => (
  <div className="posts">
    {props.map(item => (
      <div className="post" key={item.id}>
        <PostInfo post={item} />
      </div>
    ))}
  </div>
);

import { fetchPostById } from '@/utils/fetch';

import styles from './Post.module.css';

async function Post({ postId }) {
  const post = await fetchPostById(postId);

  if (!post) {
    return <p>Post information is not available.</p>;
  }

  return (
    <div className={styles.post}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>
        Id: {post.id} User id: {post.userId}
      </p>
    </div>
  );
}

export default Post;

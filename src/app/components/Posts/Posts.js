import Link from 'next/link';

import { fetchPosts } from '@/utils/fetch';

import styles from './Posts.module.css';

async function Posts() {
  const posts = await fetchPosts();

  return (
    <div>
      <ul className={styles.posts_list}>
        {posts.map(post => (
          <li key={post.id} className={styles.posts_item}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;

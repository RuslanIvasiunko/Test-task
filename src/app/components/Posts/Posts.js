import Link from 'next/link';

import { fetchPosts } from '@/utils/fetch';

async function Posts() {
  const posts = await fetchPosts();

  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;

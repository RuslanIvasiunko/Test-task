import Post from '@/app/components/Post/Post';
import Posts from '@/app/components/Posts/Posts';

export default async function PostPage({ params }) {
  const { postId } = await params;

  return (
    <div>
      <Posts />
      <Post postId={postId} />
    </div>
  );
}

import Post from '@/app/components/Post/Post';

export default async function PostPage({ params }) {
  const { postId } = await params;

  return (
    <div>
      <Post postId={postId} />
    </div>
  );
}

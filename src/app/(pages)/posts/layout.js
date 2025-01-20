import Posts from '@/app/components/Posts/Posts';

export default function PostsLayout({ children }) {
  return (
    <div>
      <Posts />
      {children}
    </div>
  );
}

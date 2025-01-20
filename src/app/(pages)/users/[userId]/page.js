import User from '@/app/components/User/User';

export default async function UserPage({ params }) {
  const { userId } = await params;

  return (
    <div>
      <User userId={userId} />
    </div>
  );
}

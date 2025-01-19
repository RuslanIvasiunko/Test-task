import User from '@/app/components/User/User';
import Users from '@/app/components/Users/Users';

export default async function UserPage({ params }) {
  const { userId } = await params;

  return (
    <div>
      <Users />
      <User userId={userId} />
    </div>
  );
}

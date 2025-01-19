import User from '@/app/components/User/User';
import Users from '@/app/components/Users/Users';

export default function UsersPage() {
  const id = null;

  return (
    <div>
      <Users />
      {id ? <User /> : null}
    </div>
  );
}

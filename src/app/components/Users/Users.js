import Link from 'next/link';

import { fetchUsers } from '@/utils/fetch';

async function Users() {
  const users = await fetchUsers();

  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;

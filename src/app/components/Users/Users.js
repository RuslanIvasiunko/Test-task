import Link from 'next/link';

import { fetchUsers } from '@/utils/fetch';

import styles from './Users.module.css';

async function Users() {
  const users = await fetchUsers();

  return (
    <div>
      <ul className={styles.users_list}>
        {users.map(user => (
          <li key={user.id} className={styles.users_item}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;

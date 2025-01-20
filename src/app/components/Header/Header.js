import Link from 'next/link';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.nav_list}>
          <li className={styles.nav_item}>
            <Link href="/users">UsersPage</Link>
          </li>
          <li className={styles.nav_item}>
            <Link href="/posts">PostsPage</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/users">UsersPage</Link>
          </li>
          <li>
            <Link href="/posts">PostsPage</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

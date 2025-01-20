import Users from '@/app/components/Users/Users';

export default function UsersLayout({ children }) {
  return (
    <div>
      <Users />
      {children}
    </div>
  );
}

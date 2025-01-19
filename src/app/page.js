import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/users');
  return (
    <div>
      <main>
        <h1>Home page</h1>
      </main>
    </div>
  );
}

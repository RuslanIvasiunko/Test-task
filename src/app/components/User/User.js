import { fetchUserById } from '@/utils/fetch';

async function User({ userId }) {
  const user = await fetchUserById(userId);

  if (!user) {
    return <p>User information is not available.</p>;
  }
  return (
    <div>
      <h3>Name: {user.name}</h3>
      <h4>Nickname: {user.username}</h4>
      <p>
        Email: <a href={`mailto:${user.email}`}></a>
        <span>{user.email}</span>
      </p>
      <address>
        <p>Address</p>
        <p>
          Street: <span>{user.address.street}</span>
        </p>
        <p>
          Suite: <span> {user.address.suite}</span>
        </p>
        <p>
          City: <span>{user.address.city}</span>
        </p>
        <p>
          zipcode: <span>{user.address.zipcode}</span>
        </p>
        <p>
          Geo: lat: <span>{user.address.geo.lat}</span> lng:{' '}
          <span>{user.address.geo.lng}</span>
        </p>
      </address>
      <p>
        Phone: <a href={`tel: ${user.phone}`}></a>
        <span>{user.phone}</span>
      </p>
      <p>
        Website:{' '}
        <a
          href={`https://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{user.website}</span>
        </a>
      </p>
      <section>
        <h4>Company</h4>
        <p>
          Company name: <span>{user.company.name}</span>
        </p>
        <p>
          Catchphrase: <span>{user.company.catchPhrase}</span>
        </p>
        <p>
          Business stuff: <span>{user.company.bs}</span>
        </p>
        <p>
          Id: <span>{user.id}</span>
        </p>
      </section>
    </div>
  );
}

export default User;

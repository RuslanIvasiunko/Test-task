import { fetchUserById } from '@/utils/fetch';

import styles from './User.module.css';

async function User({ userId }) {
  const user = await fetchUserById(userId);

  if (!user) {
    return <p>User information is not available.</p>;
  }
  return (
    <div className={styles.user}>
      <h3>Name: {user.name}</h3>
      <h4>Nickname: {user.username}</h4>
      <p>
        Email: <a href={`mailto:${user.email}`}></a>
        <span className={styles.fontWeight}>{user.email}</span>
      </p>
      <address>
        <p>Address</p>
        <p className={styles.lineIndent}>
          Street:{' '}
          <span className={styles.fontWeight}>{user.address.street}</span>
        </p>
        <p className={styles.lineIndent}>
          Suite: <span className={styles.fontWeight}>{user.address.suite}</span>
        </p>
        <p className={styles.lineIndent}>
          City: <span className={styles.fontWeight}>{user.address.city}</span>
        </p>
        <p className={styles.lineIndent}>
          zipcode:{' '}
          <span className={styles.fontWeight}>{user.address.zipcode}</span>
        </p>
        <p className={styles.lineIndent}>
          Geo: lat:{' '}
          <span className={styles.fontWeight}>{user.address.geo.lat}</span> lng:{' '}
          <span className={styles.fontWeight}>{user.address.geo.lng}</span>
        </p>
      </address>
      <p>
        Phone: <a href={`tel: ${user.phone}`}></a>
        <span className={styles.fontWeight}>{user.phone}</span>
      </p>
      <p>
        Website:{' '}
        <a
          href={`https://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.fontWeight}>{user.website}</span>
        </a>
      </p>
      <section>
        <h4>Company</h4>
        <p className={styles.lineIndent}>
          Company name:{' '}
          <span className={styles.fontWeight}>{user.company.name}</span>
        </p>
        <p className={styles.lineIndent}>
          Catchphrase:{' '}
          <span className={styles.fontWeight}>{user.company.catchPhrase}</span>
        </p>
        <p className={styles.lineIndent}>
          Business stuff:{' '}
          <span className={styles.fontWeight}>{user.company.bs}</span>
        </p>
        <p>
          Id: <span>{user.id}</span>
        </p>
      </section>
    </div>
  );
}

export default User;

import styles from '../styles/Home.module.css';
import UserForm from '../lib/components/UserForm';

export default function Home() {
  return (
    <div className={styles.container}>
      <UserForm />
    </div>
  );
}

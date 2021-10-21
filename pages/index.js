import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nextjs</title>
      </Head>
      <div className={styles.container}>
        <h3>HOME</h3>
      </div>
    </div>
  );
}

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nextjs</title>
      </Head>
      <div className={styles.container}>
        <h3>HOME</h3>
        <Image src="/dessigner.svg" alt="sad" width={200} height={200} />
      </div>
    </div>
  );
}

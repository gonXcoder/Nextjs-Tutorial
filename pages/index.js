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
        <Image
          src="https://lh3.googleusercontent.com/ogw/ADea4I7DFBur_bfj3iFlOGCtySHWP8sCsk_S94w5k7K9Tw=s32-c-mo"
          width="200"
          height="200"
        />
      </div>
    </div>
  );
}

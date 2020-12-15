import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Renato Ruis</title>
      </Head>

      <main className={styles.main}>
        <img className={styles.avatar} src="https://github.com/renatoruis.png" />
        <h1 className={styles.title}>
          Renato Ruis
        </h1>

        <div className={styles.grid}>
          <a href="/en"><h3 className={styles.cardContact}>English</h3></a>
          <a href="/ptBR"><h3 className={styles.cardContact}>Português</h3></a>
        </div>

      </main>

      <footer className={styles.footer}>
          {/* Powered by Renatão */}
      </footer>
    </div>
  )
}

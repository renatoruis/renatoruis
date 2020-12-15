import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Renato Ruis - Contacts</title>
      </Head>

      <main className={styles.main}>
        <img className={styles.avatar} src="https://github.com/renatoruis.png" />
        <h1 className={styles.title}>Renato Ruis</h1>

        <div className={styles.grid}>
          <h3 className={styles.cardContact}>+55 11 99463-1377</h3>
          <h3 className={styles.cardContact}>renatoruis@gmail.com</h3>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/"> Home &nbsp;| &nbsp;</a>
        <a href="/en"> &nbsp;English version | &nbsp;</a>
        <a href="/ptBR"> &nbsp;Versão em Português </a>
      </footer>
    </div>
  )
}

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
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Linkedin</h3>
            <p>My professional life</p>
          </a>

          <a href="https://medium.com/@renatoruisdevops" className={styles.card} target="_blank">
            <h3>Medium</h3>
            <p>Read my posts</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Github</h3>
            <p>Here are some crappy codes I use to study</p>
          </a>

          <a
            href="https://calendly.com/renatoruis"
            className={styles.card}
            target="_blank"
          >
            <h3>Cafééé!</h3>
            <p>
            Let's have coffee? schedule here, but don't keep me waiting!
            </p>
          </a>

          <a
            href="/contact"
            className={styles.cardLarge}
          >
            <h3>Contacts!</h3>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
      <a href="/"> Home &nbsp;| &nbsp;</a>
      <a href="/ptBR"> &nbsp;Versão em Português </a>
      </footer>
    </div>
  )
}

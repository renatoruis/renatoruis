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
            <p>Minha vida profissional</p>
          </a>

          <a href="https://medium.com/@renatoruisdevops" className={styles.card} target="_blank">
            <h3>Medium</h3>
            <p>Leia meus posts</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Github</h3>
            <p>Aqui tem algumas porcarias de códigos que uso para estudar</p>
          </a>

          <a
            href="https://calendly.com/renatoruis"
            className={styles.card}
            target="_blank"
          >
            <h3>Cafééé!</h3>
            <p>
              Bora tomar um café? agende aqui, mas não me deixe esperando!
            </p>
          </a>

          <a href="/contact" className={styles.cardLarge} > <h3>Contato!</h3></a>
        </div>
      </main>

      <footer className={styles.footer}>
      <a href="/"> Home &nbsp;| &nbsp;</a>
      <a href="/en"> &nbsp;English version </a>
      </footer>
    </div>
  )
}

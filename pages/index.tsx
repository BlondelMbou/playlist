import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title> PlayList | Home </title>
      <meta name="keywords" content="playlist" />
    </Head>

  
    <div>
      <h1 className={styles.title}>Home Page</h1>
      {/* <p className={styles.texte}>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum</p> */}

        <Link href="/playlist">
          See my playlist
        </Link>

      </div>
      </>

  )
}

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import record from '../data/music.json'
import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
// import Nintento from '../components/animation.js';
import HamburgerMenu from '../components/menu.js'


export default function Home() {

  const router = useRouter();
  const [image, setImage] = useState('');
  const [name, setName] = useState({});
  const [price, setPrice] = useState();

  function handleClick() {
    router.push('/albums');
  };


  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="author" content="MDIA 2109" />
        <meta name="assignment" content="Assignment #2 - Home Page" />
        <meta name="page" content="KK Slider Fandom" />
        <link rel="icon" href="/kkhead.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Shrikhand&display=swap" rel="stylesheet" />
      </Head>

      
      <main className={styles.main}>
        <div className={styles.header1}><h1>Welcome to K.K. Fandom</h1></div>
        {/* <Nintento></Nintento> */}

        {/* <Image src="/slider.png" width="300" height="480" className={styles.kk}></Image> */}
        <Image src="/djslider.png" width="500" height="480" className={styles.kk}></Image>


        <div onClick={handleClick} className={styles.header2}>
          <h2>Discover his Songs</h2>
        </div>

      </main>
    </>
  );
}


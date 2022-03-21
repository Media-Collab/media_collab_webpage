import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Typography from '@mui/material/Typography';
import SearchAppBar from '../components/SearchAppBar';
import mediacollabLogo from "../../public/mediacollab_logo.svg";
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Media Collab | What are you going to create?</title>
        <meta name="description" content="Media Collab official webpage" />
        <link rel="icon" href="/favicon.png" />
      </Head>
  
      <SearchAppBar />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.mediacollab.co">Media Collab</a>
        </h1>
        <Image
          src={mediacollabLogo}
          alt="Media Collab Logo"
          width="200%"
          height="200%"
        />

        <p className={styles.description}>
          Student Group{' '} 
          <code className={styles.code}>aimed at students who seek to put into practice their knowledge in programming, art, design, and audio, in which experiences are shared and collaborative teams are worked on to create interactive features and develop applications to solve problems. It is a multidisciplinary space that aims to encourage members to participate in projects, calls and other events to create a personal portfolio, develop experience and acquire knowledge for professional projects.</code>
        </p>

        <div sx={{
                display: { xs: 'block', md: 'none' }
              }}>
          <h1>Roles you can develop</h1>  
          <p className={styles.info}>Programmer</p>
          <p className={styles.info}>Designer</p>
          <p className={styles.info}>Multimedia content</p>
        </div>

        <div className={styles.grid}>
          <a className={styles.card}>
	    <h2>Projects &rarr;</h2>
            <p>Meet the people behind the scenes.</p>
          </a>

          <a className={styles.card}>
            <h2>Projects &rarr;</h2>
            <p>Explore all the projects that the group developed.</p>
          </a>

          <a className={styles.card}>
            <h2>Blog &rarr;</h2>
            <p>Discover about some tips, recommendations and experiences ours members.</p>
          </a>
        </div>
        <h1>Join our discord✌</h1> 
        <div sx={{
                display: { xs: 'block', md: 'none' }
              }}>
          <h2 className={styles.info}><a href="https://discord.gg/jatmyDUb3h">Click here!</a></h2>
        </div>
  
        <h1>Our schedule📅</h1> 
        <Box  sx={{
                display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)'
              }}>
          <h3 className={styles.info}>Tuesday: <a>Dev front/back end</a> 12.30p.m.</h3>
          <h3 className={styles.info}>Wednesday: <a>VideoGames</a> 1.00p.m.</h3>
          <h3 className={styles.info}>Thursday: <a>Mobile</a> 12.30p.m.</h3>
          <h3 className={styles.info}>In <a>Infolab</a> UAO</h3>
        </Box>
        
            
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.mediacollab.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/mediacollab_logo.svg" alt="Media Collab Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

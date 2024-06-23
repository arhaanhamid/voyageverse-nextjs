import RecentPosts from "@/components/recentPosts/RecentPosts";
import "./globals.css";
import styles from "./home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Know Where To Go.</h1>
          <p className={styles.desc}>
            Voyage Verse is where you can find your next travel to. Check all
            the mesmerising places there are in the world and what the people
            who travelled there say about it...
          </p>
          <div className={styles.buttons}>
            <button className={styles.button}>
              <Link href="/about">Learn More</Link>
            </button>
            <button className={styles.button}>
              <Link href="/contact">Contact</Link>
            </button>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.img}></div>
        </div>
      </div>
      <RecentPosts />
    </div>
  );
};

export default Home;

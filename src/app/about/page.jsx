"use client";
import styles from "./about.module.css";
import dynamic from "next/dynamic";

//cant export since this is a client component
// export const metadata = {
//   title: "About Page",
//   description: "About page",
// };

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Users",
    value: "1000",
    postfix: "+",
  },
  {
    // prefix: "~",
    metric: "Posts",
    value: "100",
    postfix: "+",
  },
  {
    metric: "Months",
    value: "6",
    postfix: "+",
  },
];

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        {/* <h2 className={styles.subtitle}>About this App</h2> */}
        <h1 className={styles.title}>Welcome to VoyageVerse.</h1>
        <p className={styles.desc}>
          Voyageverse is a cutting-edge full-stack web platform designed to be
          the ultimate travel companion for adventurers and explorers alike.
          Imagine having a one-stop resource that provides you with all the
          essential information about a destination before you even set foot
          there. Whether you&apos;re planning a weekend getaway or an extended
          vacation, Voyageverse ensures you&apos;re well-prepared and excited
          for your journey.
        </p>
        <div className={styles.boxes}>
          {achievementsList.map((achievement, index) => {
            return (
              <div key={index} className={styles.box}>
                <h2 className={styles.boxHead}>
                  {achievement.prefix}
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    transitions={(index) => ({
                      type: "spring",
                      duration: index + 0.9,
                    })}
                    configs={(_, index) => {
                      return {
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (index + 1),
                      };
                    }}
                  />
                  {achievement.postfix}
                </h2>
                <p>{achievement.metric}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

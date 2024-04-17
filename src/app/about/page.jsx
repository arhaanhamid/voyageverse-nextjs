"use client";
import Image from "next/image";
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
    value: "100",
    postfix: "+",
  },
  {
    // prefix: "~",
    metric: "Posts",
    value: "1000",
    postfix: "+",
  },
  {
    metric: "Years",
    value: "10",
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          inventore sunt velit molestias totam rem odio in quisquam dicta quidem
          consequatur quis ad alias cum eius neque sed et veniam!
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

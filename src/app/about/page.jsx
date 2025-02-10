"use client";
import dynamic from "next/dynamic";
import { montserrat } from "./../fonts";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  {
    metric: "Users",
    value: "1000",
    postfix: "+",
  },
  {
    metric: "Posts",
    value: "100",
    postfix: "+",
  },
  {
    metric: "Year",
    value: "1",
    postfix: "+",
  },
];

const AboutPage = () => {
  return (
    <div className="flex flex-col md:flex-row text-center md:text-left text-black leading-tight">
      <div className="flex-1 flex flex-col gap-12 p-5 md:mx-10 lg:mx-16 xl:mx-56 my-5">
        <h1
          className={`${montserrat.className} text-[36px] lg:text-[54px] text-center`}
        >
          Welcome to <br className="xl:hidden" />{" "}
          <span className="uppercase text-green-500">VoyageVerse</span>.
        </h1>
        <p className="text-[20px] font-light">
          Voyageverse is a cutting-edge full-stack web platform designed to be
          the ultimate travel companion for adventurers and explorers alike.
          Imagine having a one-stop resource that provides you with all the
          essential information about a destination before you even set foot
          there. Whether you&apos;re planning a weekend getaway or an extended
          vacation, Voyageverse ensures you&apos;re well-prepared and excited
          for your journey.
        </p>
        <div className="flex flex-col items-center gap-[50px] md:flex-row md:items-center md:justify-between xl:mx-36">
          {achievementsList.map((achievement, index) => (
            <div key={index} className="flex flex-col items-center">
              <h2 className="flex text-[var(--btn)] text-2xl">
                {achievement.prefix && achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.9,
                  })}
                  configs={(_, index) => ({
                    mass: 1,
                    friction: 100,
                    tensions: 140 * (index + 1),
                  })}
                />
                {achievement.postfix && achievement.postfix}
              </h2>
              <p className="text-center">{achievement.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

import RecentPosts from "@/components/recentPosts/RecentPosts";
import Link from "next/link";
import { montserrat } from "./fonts";

const Home = () => {
  return (
    <div>
      <div className="blur-overlay"></div>
      <div className="relative  z-1 flex flex-col gap-[100px] text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] items-center gap-[20px] px-5 py-2 lg:px-20 xl:px-32">
          <div className="flex flex-col gap-5 md:gap-10 lg:gap-15">
            <div
              className={`lg:hidden mx-auto p-[30px] h-[250px] w-[250px] md:h-[320px] md:w-[320px] rounded-[50%] 
                bg-gradient-to-br from-[rgba(26,188,156,0.5)] to-[rgba(230,126,34,0.7)]
                shadow-[rgba(0,0,0,0.17)_0px_-23px_25px_0px_inset,rgba(0,0,0,0.15)_0px_-36px_30px_0px_inset,rgba(0,0,0,0.1)_0px_-79px_40px_0px_inset,rgba(0,0,0,0.06)_0px_2px_1px,rgba(0,0,0,0.09)_0px_4px_2px,rgba(0,0,0,0.09)_0px_8px_4px,rgba(0,0,0,0.09)_0px_16px_8px,rgba(0,0,0,0.09)_0px_32px_16px"
              `}
            >
              <div className="w-full h-full bg-[url('/hero.gif')] bg-no-repeat bg-cover"></div>
            </div>
            <h1
              className={`${montserrat.className} text-[40px] md:text-[50px] lg:text-[70px] text-center uppercase leading-tight`}
            >
              Know Where To Go.
            </h1>
            <p className="text-[20px] text-center leading-tight">
              Voyage Verse is where you can find your next travel to. Check all
              the mesmerising places there are in the world and what the people
              who travelled there say about it...
            </p>
            <div className="flex justify-around lg:mt-10 xl:mt-20">
              <button className="font-bold px-[20px] py-[10px] min-w-[120px] cursor-pointer border-0 rounded-[5px] bg-blue-600 text-white hover:bg-white hover:text-blue-600">
                <Link href="/about">Learn More</Link>
              </button>
              <button className="font-bold p-[20px] py-[10px] min-w-[120px] cursor-pointer border-0 rounded-[5px] bg-white text-blue-600 hover:bg-blue-600 hover:text-white">
                <Link href="/contact">Contact</Link>
              </button>
            </div>
          </div>

          <div
            className={`hidden mx-auto lg:block p-[100px] h-[400px] w-[400px] xl:h-[500px] xl:w-[500px] rounded-[50%] 
                bg-gradient-to-br from-[rgba(26,188,156,0.5)] to-[rgba(230,126,34,0.7)]
                shadow-[rgba(0,0,0,0.17)_0px_-23px_25px_0px_inset,rgba(0,0,0,0.15)_0px_-36px_30px_0px_inset,rgba(0,0,0,0.1)_0px_-79px_40px_0px_inset,rgba(0,0,0,0.06)_0px_2px_1px,rgba(0,0,0,0.09)_0px_4px_2px,rgba(0,0,0,0.09)_0px_8px_4px,rgba(0,0,0,0.09)_0px_16px_8px,rgba(0,0,0,0.09)_0px_32px_16px"
              `}
          >
            <div className="w-full h-full bg-[url('/hero.gif')] bg-no-repeat bg-cover"></div>
          </div>
        </div>
        <RecentPosts />
      </div>
    </div>
  );
};

export default Home;

import UserPosts from "@/components/userPosts/UserPosts";

import { auth } from "@/lib/auth";
import Image from "next/image";

const ProfilePage = async () => {
  const session = await auth();

  return (
    <div>
      <div className="profile-cover shadow-form-shadow"></div>
      <div className="flex mt-20">
        <div className="min-w-[30%] sm:mr-8 lg:mr-16 z-10">
          <div class="flex items-center justify-center shadow-form-shadow">
            <div class="bg-white">
              <div class="flex justify-center px-5 -mt-24 mb-10">
                <Image
                  class="bg-white p-2 rounded-full"
                  src={
                    session.user.image ? session.user.image : "/noavatar.png"
                  }
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <div className="text-center px-14">
                  <h2 className="text-gray-800 text-3xl font-bold">
                    {session.user.name}
                  </h2>
                  <span className="text-gray-400 mt-2">
                    {session.user.email}
                  </span>
                  <p className="mt-8 text-gray-500 text-sm">Your bio here...</p>
                </div>
                <div className="mt-8 bg-gray-50 grid grid-cols-3 border">
                  <div className="flex flex-col items-center text-center hover:bg-gray-100 cursor-pointer border border-gray-4">
                    <span className="font-bold">256</span>
                    <span className="font-light text-[14px] text-gray-500">
                      Followers
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center hover:bg-gray-100 cursor-pointer border border-gray-4">
                    <span className="font-bold">2400</span>
                    <span className="font-light text-[14px] text-gray-500">
                      Following
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center hover:bg-gray-100 cursor-pointer border border-gray-4">
                    <span className="font-bold">24</span>
                    <span className="font-light text-[14px] text-gray-500">
                      Posts
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center bg-black text-white w-50 h-14  font-bold hover:bg-white hover:text-black hover:border-2 hover:border-black cursor-pointer">
                Edit Profile
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[65%] z-10 mt-10">
          <UserPosts userId={session.user.id} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

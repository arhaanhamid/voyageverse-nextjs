import { Suspense } from "react";
import styles from "./profile.module.css";
import UserPosts from "@/components/userPosts/UserPosts";

import { auth } from "@/lib/auth";

const ProfilePage = async () => {
  const session = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <UserPosts userId={session.user.id} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

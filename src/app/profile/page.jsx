import { Suspense } from "react";
import styles from "./profile.module.css";
import UserPosts from "@/components/userPosts/UserPosts";
import UserPostForm from "@/components/userPostForm/UserPostForm";
// import AdminUsers from "@/components/adminUsers/AdminUsers";
// import AdminUserForm from "@/components/adminUserForm/AdminUserForm";
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
        <div className={styles.col}>
          <UserPostForm userId={session.user.id} />
        </div>
      </div>
      {/* <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUserForm />
        </div>
      </div> */}
    </div>
  );
};

export default ProfilePage;

// components/PostModal.js
"use client";
import styles from "@/components/userPostForm.module.css";
import { useState, useEffect } from "react";
import { uploadData } from "@/lib/action";
import Uploadimage from "@/components/uploadimage/Uploadimage";
import LocationSelect from "./locationSelect/LocationSelect";
import { auth } from "@/lib/auth";
import { getUser } from "@/lib/data";

const PostModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [location, setLocation] = useState("");
  const [user, setUser] = useState("You");

  console.log(user);
  useEffect(() => {
    const fetchUser = async () => {
      console.log("user");
      try {
        const session = await auth();

        // const user = await getUser(session.userId)
        setUser(session);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchUser();
    const openButton = document.getElementById("openButton");
    const closeButton = document.getElementById("closeButton");

    const openModal = () => {
      setModalOpen(true);
      document.body.style.overflow = "hidden"; // Disable scrolling
    };

    const closeModal = () => {
      setModalOpen(false);
      document.body.style.overflow = "auto"; // Enable scrolling
    };

    openButton.addEventListener("click", openModal);
    closeButton.addEventListener("click", closeModal);
    return () => {
      openButton.removeEventListener("click", openModal);
      closeButton.removeEventListener("click", closeModal);
      openButton.removeEventListener("click", openModal);
      closeButton.removeEventListener("click", closeModal);
    };
  }, []);

  return (
    <>
      {/* Background overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${
          modalOpen
            ? "opacity-100 pointer-events-auto backdrop-blur-sm"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Modal */}
      <div
        id="modal"
        className={`fixed inset-0 flex items-center justify-center z-50 overflow-y-auto ${
          modalOpen ? "" : "hidden"
        }`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className={styles.form_container}>
          <div className="relative dark:bg-white rounded-lg max-w-lg mx-auto p-4 md:p-8 w-full h-full max-w-screen-lg">
            <button
              id="closeButton"
              className="absolute top-0 right-0 mt-0.3 mr-1 text-white"
              onClick={() => setModalOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <form action={uploadData} className={styles.form}>
              <div className={styles.form_group}>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title..."
                />
                {/* <input type="hidden" name="userId" value={user.} /> */}
                <input type="hidden" name="location" value={location} />
              </div>
              <div className={styles.form_group}>
                <textarea
                  name="desc"
                  id="desc"
                  rows="10"
                  cols="50"
                  placeholder="Description..."
                ></textarea>
              </div>

              <LocationSelect location={location} setLocation={setLocation} />

              <div className={styles.form_group}>
                <input
                  type="file"
                  id="images"
                  name="images"
                  accept="image/*"
                  multiple
                />
              </div>
              {/* <Uploadimage
                onImageSelect={() => {}}
                  setImages={setImages}
                images={images}
              /> */}

              <div className={styles.group_btn}>
                <button
                  id="closeButton"
                  className={`bg-[#DC2626] ${styles.form_submit_btn}`}
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className={`bg-white ${styles.form_submit_btn}`}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostModal;

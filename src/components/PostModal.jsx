// components/PostModal.js
"use client"
import { useState, useEffect } from "react";

const PostModal = () => {

  const [modalOpen, setModalOpen] = useState(false);


  useEffect(() => {
   
    const modal = document.getElementById("modal");
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
    };
  }, []);

  return (
    <>
      {/* Background overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${
          modalOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
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
        <div className="relative bg-white dark:bg-gray-800 rounded-lg max-w-lg mx-auto p-4 md:p-8">
          {/* Close button */}
          <button
            id="closeButton"
            className="absolute top-0 right-0 mt-4 mr-4 text-gray-600 dark:text-gray-400"
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
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Modal content */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Welcome to the Luxe Family!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              A confirmation email has been sent to your account with shipping details.
            </p>
            <button
              id="closeButton"
              className="bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-700 transition-colors focus:outline-none"
              onClick={() => setModalOpen(false)}
            >
              Back to Store
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostModal;

"use client";
import Image from "next/image";
import styles from "./contact.module.css";
import { useState } from "react";
import { send } from "emailjs-com";

// import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";

// const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr: false})

// export const metadata = {
//   title: "Contact Page",
//   description: "Contact description",
// };

const ContactPage = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setButtonDisabled(true);
    // document.getElementById("submitButton").classList.add("disabled");
    setTimeout(() => {
      setButtonDisabled(false);
      // document.getElementById("submitButton").classList.remove("disabled");
    }, 30000);

    const data = {
      from_email: e.target.email.value,
      name: e.target.name.value,
      subject: e.target.subject.value,
      message: `From: ${e.target.name.value} \n${e.target.message.value}`,
    };

    send(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      data,
      process.env.NEXT_PUBLIC_USER_ID
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setEmailSubmitted(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        {/* <HydrationTestNoSSR/> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" placeholder="Name and Surname" name="name" />
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            required
          />
          <input type="text" placeholder="Subject" name="subject" />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            required
            placeholder="Message"
          ></textarea>
          <button
            type="submit"
            className={
              buttonDisabled ? styles.buttonDisabled : styles.buttonEnabled
            }
          >
            Send
          </button>
        </form>
        {emailSubmitted && (
          <p className={styles.emailSent}>Email send successfully!</p>
        )}
      </div>
    </div>
  );
};

export default ContactPage;

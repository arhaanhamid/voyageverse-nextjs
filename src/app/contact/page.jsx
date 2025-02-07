"use client";
import Image from "next/image";
import { useState } from "react";
import { send } from "emailjs-com";

const ContactPage = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setButtonDisabled(true);
    setTimeout(() => {
      setButtonDisabled(false);
    }, 30000);

    const data = {
      from_email: e.target.email.value,
      name: e.target.name.value,
      subject: e.target.subject.value,
      message: `From: ${e.target.name.value} \n${e.target.message.value}`,
    };

    send(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_CONTACT_TEMPLATE_ID,
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
    <div className="flex flex-col md:flex-row items-center gap-10 p-1 sm:mx-20 md:mx-10 lg:mx-20 xl:mx-44 lg:gap-28 xl:gap-44">
      {/* Image Container */}
      {/* <div className="h-[200px]"> */}
      <Image
        src="/contact.png"
        alt="Contact"
        width={999}
        height={999}
        // fill
        className="hidden md:block w-[300px] lg:w-[350px] xl:w-[400px] h-auto "
      />
      {/* </div> */}

      {/* Form Container */}
      <div
        className="w-full rounded-[16px] border-2 border-transparent p-4 flex flex-col gap-[50px] text-white"
        style={{
          background:
            "linear-gradient(#212121, #212121) padding-box, linear-gradient(145deg, transparent 35%, #e81cff, #40c9ff) border-box",
        }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-[30px]">
          {/* Name Input */}
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Name and Surname"
              name="name"
              className="w-full px-4 py-3 rounded-[8px] text-white bg-transparent border border-[#414141] placeholder-[#6c6b6b] focus:outline-none focus:border-[#e81cff]"
            />
          </div>
          {/* Email Input */}
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Email Address"
              name="email"
              required
              className="w-full px-4 py-3 rounded-[8px] text-white bg-transparent border border-[#414141] placeholder-[#6c6b6b] focus:outline-none focus:border-[#e81cff]"
            />
          </div>
          {/* Subject Input */}
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="w-full px-4 py-3 rounded-[8px] text-white bg-transparent border border-[#414141] placeholder-[#6c6b6b] focus:outline-none focus:border-[#e81cff]"
            />
          </div>
          {/* Message Textarea */}
          <div className="flex flex-col">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
              placeholder="Message"
              className="w-full h-[96px] px-4 py-3 rounded-[8px] resize-none text-white bg-transparent border border-[#414141] placeholder-[#6c6b6b] focus:outline-none focus:border-[#e81cff]"
            ></textarea>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            disabled={buttonDisabled}
            className={`p-5 rounded-[5px] font-bold ${
              buttonDisabled
                ? "bg-gray-500 cursor-not-allowed text-[var(--text)]"
                : "bg-white text-black cursor-pointer hover:bg-[#414141] hover:text-white"
            }`}
          >
            Send
          </button>
        </form>
        {emailSubmitted && (
          <p className="mt-1 text-green-500 text-[15px] font-medium">
            Email send successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactPage;

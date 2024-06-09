"use client";

import { useEffect, useState } from "react";
import { addPost, cloudinaryUpload, uploadFiles } from "@/lib/action";
import styles from "./userPostForm.module.css";
import { useFormState } from "react-dom";

import { CldUploadButton, CldUploadWidget } from "next-cloudinary";

const UserPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  const [imageURLs, setImageURLs] = useState("");
  const [fileObjs, setFileObjs] = useState([]);

  const handleImageChange = async (e) => {
    const files = Array.from(e.target.files);
    const newFileObjs = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(files[i]);

      reader.onload = function () {
        const value = reader.result.split(",")[1];
        const obj = {
          fileName: files[i].name,
          mimeType: files[i].type,
          data: value,
        };

        newFileObjs.push(obj);
        setFileObjs((prevFileObjs) => [...prevFileObjs, obj]);
      };
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    // const { title, desc, userId } = Object.fromEntries(e.target.formEntries);
    console.log(e);

    // console.log(title);
    // console.log(desc);
    console.log(userId);
    // if (fileObjs.length > 0) {
    //   cloudinaryUpload(fileObjs).then((urls) => {
    //     setImageURLs((prevURLs) => [...prevURLs, ...urls]);
    //   });
    // }
  }

  useEffect(() => {
    // if (fileObjs.length > 0) {
    //   cloudinaryUpload(fileObjs).then((urls) => {
    //     setImageURLs((prevURLs) => [...prevURLs, ...urls]);
    //   });
    // }
  }, [fileObjs]);

  return (
    <form onSubmit={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      {/* <input type="hidden" name="imageURLs" value={imageURLs} /> */}
      <input type="text" name="title" placeholder="Title" required />
      {/* <input type="text" name="slug" placeholder="slug" required /> */}

      {/* <CldUploadButton uploadPreset="test_upload" /> */}
      {/* <CldUploadWidget
        uploadPreset="test_upload"
        onSuccess={(results) => {
          console.log("Success: ", results);
        }}
        onUploadAdded={(results) => {
          console.log("Upload Added: ", results);
        }}
      >
        {({ open }) => {
          return <button onClick={() => open()}>Upload an Image</button>;
        }}
      </CldUploadWidget> */}

      <textarea type="text" name="desc" placeholder="desc" rows={10} required />

      <input
        type="file"
        name="images"
        multiple
        accept="image/*"
        // onChange={handleImageChange}
        // required
      />

      <button type="submit">Submit</button>
      {state?.error}
    </form>
  );
};

export default UserPostForm;

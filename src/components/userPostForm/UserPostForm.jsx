"use client";
import { revalidatePath } from "next/cache";
// import { v2 as cloudinary } from "cloudinary";

// import Container from "@/components/Container";
// import CldImage from "@/components/CldImage";
// import Button from "@/components/Button";

// import images from "@/data/images.json";

import styles from "./userPostForm.module.css";
import { useState } from "react";
import { uploadImage } from "@/lib/action";

function UserPostForm({ userId }) {
  //   // const { resources: sneakers } = await cloudinary.api.resources_by_tag('nextjs-server-actions-upload-sneakers', { context: true });

  //   async function uploadImage(formData) {
  //     "use server";

  //     const file = formData.get("image");
  //     const arrayBuffer = await file.arrayBuffer();
  //     const buffer = Buffer.from(arrayBuffer);

  //     await new Promise((resolve, reject) => {
  //       cloudinary.uploader
  //         .upload_stream(
  //           {
  //             tags: ["nextjs-server-actions-upload-sneakers"],
  //             upload_preset: "test_upload",
  //           },
  //           function (error, result) {
  //             if (error) {
  //               reject(error);
  //               return;
  //             }
  //             console.log(result);
  //             resolve(result);
  //           }
  //         )
  //         .end(buffer);
  //     });

  //     revalidatePath("/");
  //   }

  return (
    <form action={uploadImage} className={styles.container}>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" required />
      <textarea type="text" name="desc" placeholder="desc" rows={10} required />

      <select name="location" defaultValue="" required>
        <option value="" hidden disabled>
          Select Location
        </option>
        <option value="india">India</option>
        <option value="usa">USA</option>
        <option value="japan">Japan</option>
      </select>

      <input type="file" name="images" multiple accept="image/*" required />
      <button>Submit</button>
    </form>
  );
}

export default UserPostForm;

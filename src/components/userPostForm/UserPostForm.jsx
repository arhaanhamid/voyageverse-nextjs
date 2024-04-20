"use client";
// import { useEffect, useState } from "react";
// import { addPost, uploadFiles } from "@/lib/action";
// import styles from "./userPostForm.module.css";
// import { useFormState } from "react-dom";

// const UserPostForm = ({ userId }) => {
//   const [state, formAction] = useFormState(addPost, undefined);
//   const [imageUrlArr, setImageUrlArr] = useState();
//   const [imageURLs, setImageURLs] = useState("");
//   // const [fileObjs, setFileObjs] = useState([]);
//   const fileObjs = [];

//   const handleImageChange = async (e) => {
//     const files = Array.from(e.target.files);

//     for (let i = 0; i < files.length; i++) {
//       const reader = new FileReader();
//       reader.readAsDataURL(files[i]);

//       reader.onload = function () {
//         const value = reader.result.split(",")[1];
//         let obj = {
//           fileName: files[i].name,
//           mimeType: files[i].type,
//           data: value,
//         };

//         fileObjs.push(obj);
//       };
//     }
//   };

//   console.log(fileObjs);

//   const urlArray = uploadFiles(fileObjs);
//   setImageUrlArr(urlArray);
//   const urlString = imageUrlArr.join(",");
//   setImageURLs(urlString);

//   return (
//     <form action={formAction} className={styles.container}>
//       <h1>Add New Post</h1>
//       <input type="hidden" name="userId" value={userId} />
//       <input type="hidden" name="imageURLs" value={imageURLs} />
//       <input type="text" name="title" placeholder="Title" required />
//       <input type="text" name="slug" placeholder="slug" required />

//       <input
//         type="file"
//         name="images"
//         multiple
//         accept="image/*"
//         onChange={handleImageChange}
//         required
//       />

//       <textarea type="text" name="desc" placeholder="desc" rows={10} required />
//       <button>Add</button>
//       {state?.error}
//     </form>
//   );
// };

// export default UserPostForm;

import { useEffect, useState } from "react";
import { addPost, uploadFiles } from "@/lib/action";
import styles from "./userPostForm.module.css";
import { useFormState } from "react-dom";

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

  useEffect(() => {
    console.log(fileObjs);
    if (fileObjs.length > 0) {
      const urlArray = uploadFiles(fileObjs);
      setImageURLs(urlArray.join(","));
    }
  }, [fileObjs]);

  return (
    <form onSubmit={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="hidden" name="imageURLs" value={imageURLs} />
      <input type="text" name="title" placeholder="Title" required />
      <input type="text" name="slug" placeholder="slug" required />

      <input
        type="file"
        name="images"
        multiple
        accept="image/*"
        onChange={handleImageChange}
        required
      />

      <textarea type="text" name="desc" placeholder="desc" rows={10} required />
      <button type="submit">Add</button>
      {state?.error}
    </form>
  );
};

export default UserPostForm;

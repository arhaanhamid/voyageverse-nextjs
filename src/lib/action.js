"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { auth, signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

import { v2 as cloudinary } from "cloudinary";

export const uploadData = async function (formData) {
  const { title, desc, location } = Object.fromEntries(formData);
  const imageData = [];

  const session = await auth();
  const userId = session.user.id;

  const files = formData.getAll("images");

  for (const file of files) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    console.log(title, desc, location, userId, buffer);
    await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            tags: ["nextjs-server-actions-upload-sneakers"],
            upload_preset: "voyageverse_uploads",
          },
          function (error, result) {
            if (error) {
              reject(error);
              return;
            }

            imageData.push({
              imageUrl: result.secure_url,
              imageId: result.asset_id,
            });

            resolve(result);
          }
        )
        .end(buffer);
    });
  }

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      location,
      userId,
      imageData,
      userPrefs: [{ userId: userId }],
    });

    await newPost.save();

    console.log("New post saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
    revalidatePath("/profile");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }

  revalidatePath("/");
};

export const updateInteraction = async (data) => {
  console.log("Update interaction Data");
  console.log(data);
  try {
    connectToDb();

    console.log("Interaction updated!");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }

  revalidatePath("/");
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const addUser = async (prevState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });

    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleGoogleLogin = async () => {
  "use server";
  await signIn("google");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
      userId: username + "_1",
    });

    await newUser.save();

    //getting automatically generated _id from mongodb
    //save that _id as a userId property
    newUser.userId = newUser._id.toString();
    await newUser.save();
    console.log("New user registered");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};

// reads in the cloudinary env variable - put this before
// require("dotenv").config();
// // we're aliasing version 2 and referencing with a variable
// const cloudinary = require("cloudinary").v2;
// // cloudinary picks up env and is now configured
// console.log(cloudinary.config().cloud_name);

export const cloudinaryUpload = async (files) => {
  const uploadedURLs = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    const formData = new FormData();
    formData.append("file", `data:${file.mimeType};base64,${file.data}`);
    formData.append("upload_preset", "test_upload");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      console.log(data);
      uploadedURLs.push(data.secure_url);
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
    }
  }

  return uploadedURLs;
};

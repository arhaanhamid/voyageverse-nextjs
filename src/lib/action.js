"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { auth, signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (prevState, formData) => {
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");

  const { title, desc, slug, userId, img } = Object.fromEntries(formData);

  //EXTRACT IMG URLs FROM 'img'
  //E.G., const imgUrls = ['URL1', 'URL2', 'URL3']

  try {
    connectToDb();
    const post = await Post.findOne({ slug: slug });

    if (post) {
      return { error: "Please enter a unique slug value as this is taken." };
    }

    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
      img,
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

import { google } from "googleapis";
import { Readable } from "stream";

export async function uploadFiles(objs) {
  let URLs = [];

  console.log(objs);

  for (let i = 0; i < objs.length; i++) {
    let fileName = objs[i].fileName;
    let mimeType = objs[i].mimeType;
    let data = objs[i].data;

    try {
      // Authenticate with Google Drive API (replace with your credentials)
      const auth = new google.auth.JWT({
        scopes: ["https://www.googleapis.com/auth/drive"],
        keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      });

      const drive = google.drive({ version: "v3", auth });

      const blob = Buffer.from(data, "base64");

      // Upload the file

      const readableStream = Readable.from([blob]);

      const response = await drive.files.create({
        requestBody: {
          name: fileName,
          mimeType: mimeType,
          parents: [process.env.GOOGLE_FOLDER_ID],
        },
        media: {
          mimeType,
          body: readableStream,
        },
        fields: "id, webViewLink", // Only request necessary fields
      });

      URLs.push(response.data.webViewLink);
      readableStream.push(null); // Mark end of stream for each upload
    } catch (error) {
      console.error("Error creating file:", error);
      throw error; // Re-throw for handling in the main function
    }
  }

  console.log(URLs);

  return URLs;
}

import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

// export const updateManyData = async () => {
//   try {
//     connectToDb();

//     await Post.updateMany({}, { $set: { userPrefs: { userId: "102715752" } } });

//     console.log("Updated Many Data");
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to fetch posts!");
//   }
// };

export const getUserPosts = async (userId) => {
  try {
    connectToDb();
    const posts = await Post.find({ userId: userId });
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getRecentPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find().sort({ createdAt: -1 }).limit(9);
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (postid) => {
  try {
    connectToDb();
    const post = await Post.findOne({ _id: postid });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (userId) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findOne({ userId });
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

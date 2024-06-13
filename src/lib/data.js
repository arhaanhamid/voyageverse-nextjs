import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// TEMPORARY DATA
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];

// const posts = [
//   {
//     title: "Mr",
//     desc: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
//     img: [
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     ],
//     userId: 102715752,
//     slug: "post-1",
//     createdAt: "2024-04-15",
//     country: "India",
//     city: "Srinagar",
//   },
//   {
//     title: "Mrs",
//     desc: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
//     img: [
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     ],

//     userId: 102715752,
//     slug: "post-2",
//     createdAt: "2024-04-15",
//     country: "India",
//     city: "Srinagar",
//   },
//   {
//     title: "Mrs",
//     desc: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
//     img: [
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     ],

//     userId: 102715752,
//     slug: "product-2",
//     createdAt: "2024-04-15",
//     country: "India",
//     city: "Srinagar",
//   },
//   {
//     title: "Ms",
//     desc: "In congue. Etiam justo. Etiam pretium iaculis justo.",
//     img: [
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     ],

//     userId: 102715752,
//     slug: "page-2",
//     createdAt: "2024-04-15",
//     country: "India",
//     city: "Srinagar",
//   },
//   {
//     title: "Dr",
//     desc: "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
//     img: [
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     ],

//     userId: 102715752,
//     slug: "product-2",
//     createdAt: "2024-04-15",
//     country: "India",
//     city: "Srinagar",
//   },
//   {
//     title: "Honorable",
//     desc: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
//     img: [
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     ],

//     userId: 102715752,
//     slug: "product-1",
//     createdAt: "2024-04-15",
//     country: "India",
//     city: "Srinagar",
//   },
//   {
//     title: "Honorable",
//     desc: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
//     img: [
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     ],

//     userId: 102715752,
//     slug: "page-1",
//     createdAt: "2024-04-15",
//     country: "India",
//     city: "Srinagar",
//   },
//   {
//     title: "Dr",
//     desc: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
//     img: [
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     ],

//     userId: 102715752,
//     slug: "post-2",
//     createdAt: "2024-04-15",
//     country: "India",
//     city: "Srinagar",
//   },
//   {
//     title: "Mrs",
//     desc: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
//     img: [
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     ],

//     userId: 102715752,
//     slug: "page-2",
//     createdAt: "2024-04-15",
//     country: "India",
//     city: "Srinagar",
//   },
//   {
//     title: "Rev",
//     desc: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
//     img: [
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://plus.unsplash.com/premium_photo-1706625700445-992ed7a4a5e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     ],

//     userId: 102715752,
//     slug: "post-1",
//     createdAt: "2024-04-15",
//     country: "India",
//     city: "Srinagar",
//   },
// ];

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

export const getPost = async (slug) => {
  try {
    connectToDb();
    // const post = await Post.findOne({ slug });
    return posts[0];
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

import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// TEMPORARY DATA
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];

const posts = [
  {
    title: "Mr",
    desc: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    img: "https://unsplash.com/photos/a-bird-flying-in-the-sky-with-a-rainbow-in-the-background-0-I2BoCRr1o",
    userId: 1,
    slug: "post-1",
  },
  {
    title: "Mrs",
    desc: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    img: "https://unsplash.com/photos/a-bird-flying-in-the-sky-with-a-rainbow-in-the-background-0-I2BoCRr1o",

    userId: 2,
    slug: "post-2",
  },
  {
    title: "Mrs",
    desc: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    img: "https://unsplash.com/photos/a-bird-flying-in-the-sky-with-a-rainbow-in-the-background-0-I2BoCRr1o",

    userId: 3,
    slug: "product-2",
  },
  {
    title: "Ms",
    desc: "In congue. Etiam justo. Etiam pretium iaculis justo.",
    img: "https://unsplash.com/photos/a-bird-flying-in-the-sky-with-a-rainbow-in-the-background-0-I2BoCRr1o",

    userId: 4,
    slug: "page-2",
  },
  {
    title: "Dr",
    desc: "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    img: "https://unsplash.com/photos/a-bird-flying-in-the-sky-with-a-rainbow-in-the-background-0-I2BoCRr1o",

    userId: 5,
    slug: "product-2",
  },
  {
    title: "Honorable",
    desc: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    img: "https://unsplash.com/photos/a-bird-flying-in-the-sky-with-a-rainbow-in-the-background-0-I2BoCRr1o",

    userId: 6,
    slug: "product-1",
  },
  {
    title: "Honorable",
    desc: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    img: "https://unsplash.com/photos/a-bird-flying-in-the-sky-with-a-rainbow-in-the-background-0-I2BoCRr1o",

    userId: 7,
    slug: "page-1",
  },
  {
    title: "Dr",
    desc: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    img: "https://unsplash.com/photos/a-bird-flying-in-the-sky-with-a-rainbow-in-the-background-0-I2BoCRr1o",

    userId: 8,
    slug: "post-2",
  },
  {
    title: "Mrs",
    desc: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    img: "https://unsplash.com/photos/a-bird-flying-in-the-sky-with-a-rainbow-in-the-background-0-I2BoCRr1o",

    userId: 9,
    slug: "page-2",
  },
  {
    title: "Rev",
    desc: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    img: "https://unsplash.com/photos/a-bird-flying-in-the-sky-with-a-rainbow-in-the-background-0-I2BoCRr1o",

    userId: 10,
    slug: "post-1",
  },
];

export const getPosts = async () => {
  try {
    // connectToDb();
    // const posts = await Post.find();
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
    const post = await Post.findOne({ slug });
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

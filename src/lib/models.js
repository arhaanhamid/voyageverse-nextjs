import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const userPrefSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    like: {
      type: Boolean,
      default: false,
    },
    dislike: {
      type: Boolean,
      default: false,
    },
    pending: {
      type: Boolean,
      default: true,
    },
  },
  { _id: false }
);

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },

    imageData: {
      type: Array,
      required: true,
      unique: true,
    },

    location: {
      type: String,
      required: true,
    },
    prefs: {
      likes: { type: Number, default: 0 },
      dislikes: { type: Number, default: 0 },
    },
    userPrefs: [userPrefSchema],
  },
  { timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);

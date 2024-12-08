import client from "./client";
const endPoint = "/posts";

// GET all Posts command
const getPosts = () => client.get(endPoint);

export default {
  getPosts,
};

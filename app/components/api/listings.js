import client from "./cilent";
const endPoint = "/listings";
const getListings = () => client.get(endPoint);
export default {
  getListings,
};

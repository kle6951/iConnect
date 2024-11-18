import client from "./cilent";
const endPoint = "/listings";
const getListings = () => client.get(endPoint);
const addListings = (listing) => {
  // content-type (ie: application/json by default)
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("description", listing.description);
  data.append("category_id", listing.category.value);
};
export default {
  addListings,
  getListings,
};

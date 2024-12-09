import { create } from "apisauce";
import cache from "../utility/cache";
const apiCilent = create({
  baseURL: "http://34.134.248.77:8080/api",
  timeout: 30000, // 30 seconds
});
const get = apiCilent.get;
const generateKey = (url, params) => {
  const queryString = params ? JSON.stringify(params) : "";
  return `${url}_${queryString}`;
};

apiCilent.get = async (url, params, axiosConfig) => {
  const cacheKey = generateKey(url, params);
  const response = await get(url, params, axiosConfig); // Await the response

  if (response.ok) {
    cache.store(cacheKey, response.data);
    return response;
  }

  const data = await cache.get(cacheKey);
  return data ? { ok: true, data } : response;
};
export default apiCilent;

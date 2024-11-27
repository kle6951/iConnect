import { create } from "apisauce";
const apiCilent = create({
  baseURL: "http:/104.197.198.210:8080/api",
  timeout: 30000, // 30 seconds
});
export default apiCilent;

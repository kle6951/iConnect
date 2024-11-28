import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const prefix = "cache";
const expiryInMinutes = 5;

const isExpired = (item) => {
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  return now.diff(storedTime, "minutes") > expiryInMinutes;
};

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    // console.log("Storing in cache:", key, item); // Debug log
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log("Error storing cache:", error);
  }
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);
    // console.log("Retrieved from cache:", key, item); // Debug log
    if (!item) return null;
    if (isExpired(item)) {
    //   console.log("Cache expired for key:", key);
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }
    return item.value;
  } catch (error) {
    console.log("Error retrieving cache:", error);
  }
};

export default {
  store,
  get,
};

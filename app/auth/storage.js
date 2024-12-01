import * as SecureStore from "expo-secure-store";

const key = "authUser"; // Rename the key to better reflect stored content.

const storeUser = async (user) => {
  try {
    await SecureStore.setItemAsync(key, JSON.stringify(user));
  } catch (error) {
    console.error("Error storing the user:", error);
  }
};

const getUser = async () => {
  try {
    const user = await SecureStore.getItemAsync(key);
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error("Error retrieving the user:", error);
  }
};

const removeUser = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.error("Error removing the user:", error);
  }
};

export default { storeUser, getUser, removeUser };
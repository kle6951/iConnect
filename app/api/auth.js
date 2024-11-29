import client from "./client";
import { auth } from "../api/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const endpoint = "/users";

const register = async (fullName, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const firebaseUser = userCredential.user;

    const response = await client.post(endpoint, {
      id: firebaseUser.uid, //Firebase User UID
      full_name: fullName,
      email: firebaseUser.email,
      password,
    });

    if (!response.ok) {
      // Debug
      console.error("Error saving user to database:", response.problem);
      return { ok: false, error: "Failed to save user to the database" };
    }

    console.log("User Registration is successful");
    return { ok: true, data: response.data };
  } catch (error) {
    console.error("Registration Error:", error.message);
    return { ok: false, error: error.message };
  }
};

export default {
  register,
};

import client from "./client";
import { auth } from "../api/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

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
const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const firebaseUser = userCredential.user;

    const response = await client.get(`${endpoint}/${firebaseUser.uid}`);

    if (response.ok) {
      console.log("Login Successful");
      return { ok: true, data: response.data };
    } else {
      console.error("User not found in database");
      return { ok: false, error: "User not found in the database" };
    }
  } catch (error) {
    console.error("Login Error:", error.message);
    return { ok: false, error: error.message };
  }
};

export default {
  register,
  login,
};

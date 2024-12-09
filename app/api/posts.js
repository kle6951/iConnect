import client from "./client";
import { storage } from "./firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import authStorage from "../auth/storage";

const endPoint = "/posts";

// upload Images to Firebase
const uploadToFirebase = async (imageUri, setProgress) => {
  try {
    const response = await fetch(imageUri);
    const blob = await response.blob();

    const filename = `postImages/${Date.now()}_${imageUri.split("/").pop()}`;
    const imageRef = ref(storage, filename);

    const uploadTask = uploadBytesResumable(imageRef, blob);

    // Listen for state changes and update progress
    await new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log(`Upload is ${progress}% done`);
          if (setProgress) setProgress(progress); // Update progress in the parent component
        },
        (error) => {
          console.error("Upload failed:", error.message);
          reject(error);
        },
        () => {
          resolve();
        }
      );
    });

    const downloadURL = await getDownloadURL(imageRef);
    return downloadURL;
  } catch (error) {
    throw new Error("Failed to upload image to Firebase Storage.");
  }
};

// GET all Posts command
const getPosts = () => client.get(endPoint);

// POST command
const addPosts = async (posts, onUploadProgress) => {
  const user = await authStorage.getUser();
  if (!user || !user.id) {
    alert("User not found. Please log in again.");
    return { ok: false };
  }

  const data = new FormData();
  data.append("caption", posts.caption);
  data.append("user_id", user.id);

  const imageUrls = [];
  try {
    for (const imageUri of posts.images) {
      try {
        const firebaseUrl = await uploadToFirebase(imageUri, onUploadProgress);
        const imageName = imageUri.split("/").pop(); // Extracting image name
        imageUrls.push({ url: firebaseUrl, name: imageName }); // Storing url and name
      } catch (error) {
        console.error("Error uploading image:", error.message);
        alert("Failed to upload one or more images. Please try again.");
        return { ok: false }; // Stop if any image upload fails
      }
    }

    // Store images as JSON with "url" and "name"
    data.append("images", JSON.stringify(imageUrls));

    // console.log("Preparing to upload post to endpoint...");
    const response = await client.post(endPoint, data, {
      onUploadProgress: (progress) =>
        onUploadProgress(progress.loaded / progress.total),
    });
    // console.log("post upload completed:", response);
    return response;
  } catch (error) {
    console.error("Error posting post:", error.message);
    alert("Failed to save the posts. Please try again later.");
    return { ok: false };
  }
};

export default {
  getPosts,
  addPosts,
};
